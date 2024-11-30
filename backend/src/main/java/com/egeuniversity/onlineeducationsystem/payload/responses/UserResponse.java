package com.egeuniversity.onlineeducationsystem.payload.responses;

import com.egeuniversity.onlineeducationsystem.data.ERole;
import com.egeuniversity.onlineeducationsystem.data.User;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserResponse {

    private String name;
    private String surname;
    private String email;
    private ERole role;

    public UserResponse(User user) {
        this.name = user.getName() != null ? user.getName() : "";
        this.email = user.getEmail() != null ? user.getEmail() : "";
        this.role = user.getRoles().stream().findFirst().get().getName();
    }
}
