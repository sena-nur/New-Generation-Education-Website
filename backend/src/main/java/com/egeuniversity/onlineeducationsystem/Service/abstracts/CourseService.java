package com.egeuniversity.onlineeducationsystem.Service.abstracts;

import com.egeuniversity.onlineeducationsystem.data.Chapter;
import com.egeuniversity.onlineeducationsystem.data.Course;
import com.egeuniversity.onlineeducationsystem.dto.ChapterDTO;
import com.egeuniversity.onlineeducationsystem.dto.CourseDTO;
import com.egeuniversity.onlineeducationsystem.dto.CourseSearchDTO;
import org.springframework.data.domain.Page;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

public interface CourseService {
    Course addCourse(Course course); // Add a new course
    Course updateCourse(String id, CourseDTO dto);
    Course getCourseById(String id);
    Page<Course> getAllCourses(CourseSearchDTO dto) throws Exception;
    void deleteCourse(String id);
    Course addUserToCourse(String courseId, Long userId);
    String handleFileUpload(String courseId, MultipartFile file) throws IOException;
    Chapter getChapterById(String id);
    Chapter updateChapter(String id, ChapterDTO chapterDetails);
    void deleteChapter(String id);
    String handleChapterFileUpload(String chapterId, MultipartFile file) throws IOException;
    Chapter createChapter(Chapter chapter);
}
