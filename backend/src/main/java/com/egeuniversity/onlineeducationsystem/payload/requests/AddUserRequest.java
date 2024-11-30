package com.egeuniversity.onlineeducationsystem.payload.requests;

import com.egeuniversity.onlineeducationsystem.data.User;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter@Setter
@AllArgsConstructor
public class AddUserRequest {

    private String name;
    private String surname;

    public User toUser() {
        User user = new User();
        user.setName(name);
        return user;
    }
}
