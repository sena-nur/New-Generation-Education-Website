package com.egeuniversity.onlineeducationsystem.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CourseDTO {
    private String title;
    private String description;
    private String attachment;
    private String category;
    private Double price;
    private String creatorId;
    private List<String> chapters;
}

