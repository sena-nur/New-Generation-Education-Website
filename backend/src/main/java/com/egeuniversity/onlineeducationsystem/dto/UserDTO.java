package com.egeuniversity.onlineeducationsystem.dto;

import com.egeuniversity.onlineeducationsystem.data.Enum.Gender;
import lombok.Data;

import java.util.Date;

@Data
public class UserDTO {
    private String name;
    private String email;
    private String password;
    private Date dateOfBirth;
    private String location;
    private String phoneNumber;
    private String role;
    private String photoLink;
    private Gender gender = Gender.FEMALE;

}
