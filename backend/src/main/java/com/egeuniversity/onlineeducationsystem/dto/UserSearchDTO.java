package com.egeuniversity.onlineeducationsystem.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserSearchDTO {

    private String name;
    private String email;
    private Integer page = 1;
    private Integer size = 10;
}
