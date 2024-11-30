package com.egeuniversity.onlineeducationsystem.payload.responses;

import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
public class JwtResponse {
    private String token;
    private String type = "Bearer";
    private Long id;
    private String name;
    private String email;
    private List<String> roles;
    private String msg;

    public JwtResponse(String accessToken, Long id, String name, String email, List<String> roles, String msg) {
        this.msg = msg;
        this.token = accessToken;
        this.id = id;
        this.name = name;
        this.email = email;
        this.roles = roles;
    }
}
