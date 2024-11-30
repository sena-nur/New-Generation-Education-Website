package com.egeuniversity.onlineeducationsystem.payload.responses;

import com.egeuniversity.onlineeducationsystem.data.User;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BasicUserResponse {
    private String name;
    private String surname;
    private String email;

    public BasicUserResponse(User user) {
        this.name = user.getName() != null ? user.getName() : "";
        this.email = user.getEmail() != null ? user.getEmail() : "";
    }
}
