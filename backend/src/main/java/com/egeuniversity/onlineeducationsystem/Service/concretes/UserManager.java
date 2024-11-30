package com.egeuniversity.onlineeducationsystem.Service.concretes;

import com.egeuniversity.onlineeducationsystem.Exception.ErrorCodes;
import com.egeuniversity.onlineeducationsystem.Exception.GenericException;
import com.egeuniversity.onlineeducationsystem.Service.abstracts.UserService;
import com.egeuniversity.onlineeducationsystem.dto.UserDTO;
import com.egeuniversity.onlineeducationsystem.dto.UserSearchDTO;
import com.egeuniversity.onlineeducationsystem.repository.UserDal;
import com.egeuniversity.onlineeducationsystem.utility.Utility;
import com.egeuniversity.onlineeducationsystem.data.User;
import jakarta.persistence.criteria.Predicate;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.io.File;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class UserManager extends Utility implements UserService {
    private final UserDal userDal;

    public UserManager(UserDal userDal) {
        this.userDal = userDal;
    }

    @Override
    public User getUser() {
        try {
            Long id = Utility.getUserIdFromToken();
            Optional<User> user = userDal.findById(id);
            if (user.isEmpty()) {
                throw new RuntimeException("User Not Found");
            }
            return user.get();
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public User addUser(User user) {
        try {
            return userDal.save(user);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public void removeUser(Long userId) {
        try {
            userDal.deleteById(userId);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @Override
    public User updateUser(Long id, UserDTO dto) {
        try {
            Optional<User> existingUser = userDal.findById(id);
            if (existingUser.isEmpty()) {
                throw new RuntimeException("User Not Found");
            }

            User updateUser = existingUser.get();

            if (dto.getName() != null) {
                updateUser.setName(dto.getName());
            }
            if (dto.getEmail() != null) {
                updateUser.setEmail(dto.getEmail());
            }
            if (dto.getPassword() != null) {
                updateUser.setPassword(dto.getPassword()); // No password hashing
            }
            if (dto.getPhotoLink() != null) {
                updateUser.setPhoto(dto.getPhotoLink());
            }
            if(dto.getGender() != null){
                updateUser.setGender(dto.getGender());
            }

            return userDal.save(updateUser);

        } catch (Exception e) {
            throw new GenericException(ErrorCodes.E6_MESSAGE, ErrorCodes.E6_CODE, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    public Page<User> listUsers(UserSearchDTO dto) throws Exception {

        validatePageAndSize(dto.getPage(), dto.getSize());

        Specification<User> spec = (root, query, criteriaBuilder) -> {
            List<Predicate> searchPredicates = new ArrayList<>();

            if (dto.getName() != null) {
                searchPredicates.add(criteriaBuilder.like(root.get("name"), "%" + dto.getName() + "%"));
            }
            if (dto.getEmail() != null) {
                searchPredicates.add(criteriaBuilder.like(root.get("email"), "%" + dto.getEmail() + "%"));
            }
            return criteriaBuilder.and(searchPredicates.toArray(new Predicate[0]));
        };

        PageRequest pageRequest = PageRequest.of(dto.getPage() - 1, dto.getSize());
        Page<User> userPage;

        try {
            userPage = userDal.findAll(spec, pageRequest);
        } catch (Exception e) {
            throw new RuntimeException("Error getting users.");
        }

        return userPage;
    }

    @Override
    public String handleFileUpload(MultipartFile file) throws IOException {
        Long id = Utility.getUserIdFromToken();
        String fileName = file.getOriginalFilename();
        String saveDirectory = "/home/seckin/IdeaProjects/Online-Education-System/onlineeducationsystembu/files";
        File targetFile = new File(saveDirectory + fileName);

        file.transferTo(targetFile);

        Optional<User> userOptional = userDal.findById(id);
        if (userOptional.isEmpty()) {
            throw new GenericException(ErrorCodes.E10_MESSAGE, ErrorCodes.E10_CODE, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        User user = userOptional.get();

        String fileAccessUrl = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/files/")
                .path(fileName)
                .toUriString();
        user.setPhoto(fileAccessUrl);

        userDal.save(user);

        return user.getName() + "," + fileAccessUrl;
    }

    @Override
    public User signup(UserDTO userDTO) {
        try {
            Optional<User> existingUser = userDal.findByEmail(userDTO.getEmail());
            if (existingUser.isPresent()) {
                throw new RuntimeException("User already exists with this email.");
            }

            User newUser = new User();
            newUser.setName(userDTO.getName());
            newUser.setEmail(userDTO.getEmail());
            newUser.setPassword(userDTO.getPassword());
            newUser.setCreatedAt(LocalDateTime.now());
            newUser.setUpdatedAt(LocalDateTime.now());

            return userDal.save(newUser);
        } catch (Exception e) {
            throw new RuntimeException("Error during signup: " + e.getMessage());
        }
    }

    @Override
    public User login(String email, String password) {
        try {
            Optional<User> userOptional = userDal.findByEmail(email);
            if (userOptional.isEmpty()) {
                throw new GenericException(ErrorCodes.E13_MESSAGE, ErrorCodes.E13_CODE,
                        HttpStatus.INTERNAL_SERVER_ERROR);
            }

            User user = userOptional.get();
            if (!password.equals(user.getPassword())) {
                throw new GenericException(ErrorCodes.E13_MESSAGE, ErrorCodes.E13_CODE,
                        HttpStatus.INTERNAL_SERVER_ERROR);
            }

            return user;
        } catch (Exception e) {
            throw new GenericException(ErrorCodes.E14_MESSAGE, ErrorCodes.E14_CODE,
                    HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public void validatePageAndSize(int page, int size) {
        if (page < 1 || size < 1) {
            throw new IllegalArgumentException("Invalid page or size parameter");
        }
    }
}
