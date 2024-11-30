package com.egeuniversity.onlineeducationsystem.Service.abstracts;

import com.egeuniversity.onlineeducationsystem.data.User;
import com.egeuniversity.onlineeducationsystem.dto.UserDTO;
import com.egeuniversity.onlineeducationsystem.dto.UserSearchDTO;
import org.springframework.data.domain.Page;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface UserService {

    User addUser(User user);

    void removeUser(Long userId);

    User getUser();

    User updateUser(Long id, UserDTO dto);

    Page<User> listUsers(UserSearchDTO dto) throws Exception;

    String handleFileUpload(MultipartFile file) throws IOException;

    User signup(UserDTO userDTO);

    User login(String email, String password);
}
