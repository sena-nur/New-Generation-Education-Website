package com.egeuniversity.onlineeducationsystem.Controller;

import com.egeuniversity.onlineeducationsystem.Exception.ErrorCodes;
import com.egeuniversity.onlineeducationsystem.Exception.GenericException;
import com.egeuniversity.onlineeducationsystem.Service.abstracts.UserService;
import com.egeuniversity.onlineeducationsystem.data.User;
import com.egeuniversity.onlineeducationsystem.dto.UserDTO;
import com.egeuniversity.onlineeducationsystem.dto.UserSearchDTO;
import com.egeuniversity.onlineeducationsystem.utility.Utility;
import io.swagger.v3.oas.annotations.Operation;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/user")
@AllArgsConstructor
public class UserController {

    private final UserService userService;

    @GetMapping()
    @Operation(summary = "Get User By Id")
    public ResponseEntity<User> getUser() {
        try {
            User user = userService.getUser();
            return ResponseEntity.ok(user);
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete User")
    public ResponseEntity<String> removeUser(@PathVariable(value = "id") Long id) {
        try {
            userService.removeUser(id);
            return ResponseEntity.ok("User removed successfully");
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @PutMapping()
    @Operation(summary = "Update User By Id")
    public ResponseEntity<User> updateUser(@RequestBody UserDTO dto ) {
        try {
            User updatedUser = userService.updateUser(Utility.getUserIdFromToken(), dto);
            return ResponseEntity.ok(updatedUser);
        } catch (GenericException ge) {
            throw ge;
        } catch (Exception e) {
            throw new GenericException(ErrorCodes.E7_MESSAGE, ErrorCodes.E7_CODE, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/search")
    @Operation(summary = "Search User")
    public ResponseEntity<List<User>> searchUsers(@RequestBody UserSearchDTO dto) {
        try {
            Page<User> users = userService.listUsers(dto);
            return ResponseEntity.ok(users.getContent());
        } catch (Exception e) {
            throw new RuntimeException(e);
        }
    }

    @PutMapping("/upload-photo")
    @Operation(summary = "Upload User Photo")
    public ResponseEntity<String> uploadPhoto(@RequestParam("photo") MultipartFile photo) {
        try {
            String[] response = userService.handleFileUpload(photo).split(",");
            return ResponseEntity.ok("Photo uploaded successfully with the link:  " + response[1] + ", for the user: " + response[0]);
        } catch (GenericException ge) {
            throw ge;
        } catch (Exception e) {
            throw new GenericException(ErrorCodes.E9_MESSAGE, ErrorCodes.E9_CODE, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/testException")
    public ResponseEntity<GenericException> testException() {
        throw new GenericException(ErrorCodes.E5_CODE, "TEST EXCEPTION", HttpStatus.BAD_REQUEST);
    }

    @PostMapping("/signup")
    @Operation(summary = "Signup")
    public ResponseEntity<User> signup(@RequestBody UserDTO userDTO) {
        try {
            User newUser = userService.signup(userDTO);
            return ResponseEntity.ok(newUser);
        } catch (Exception e) {
            throw new RuntimeException("Error during signup: " + e.getMessage());
        }
    }

    /*
    @PostMapping("/login")
    @Operation(summary = "Login")
    public ResponseEntity<User> login(@RequestBody UserLoginDTO dto) {
        try {
            User user = userService.login(dto.getEmail(), dto.getPassword());
            return ResponseEntity.ok(user);
        } catch (Exception e) {
            throw new RuntimeException("Error during login: " + e.getMessage());
        }
    }
    */
    public User convertDtoToData(UserDTO dto) {
        if (dto == null || dto.getName() == null || dto.getName().isEmpty()) {
            throw new RuntimeException("UserDTO is missing or name is empty.");
        }

        User user = new User();
        user.setName(dto.getName());
        user.setEmail(dto.getEmail());
        return user;
    }


}
