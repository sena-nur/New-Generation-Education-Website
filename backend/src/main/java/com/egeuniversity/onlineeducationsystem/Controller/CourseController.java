package com.egeuniversity.onlineeducationsystem.Controller;

import com.egeuniversity.onlineeducationsystem.data.Chapter;
import com.egeuniversity.onlineeducationsystem.data.CourseChapter;
import com.egeuniversity.onlineeducationsystem.dto.CourseDTO;
import com.egeuniversity.onlineeducationsystem.dto.ChapterDTO;
import com.egeuniversity.onlineeducationsystem.repository.ChapterDal;
import com.egeuniversity.onlineeducationsystem.utility.Utility;
import com.egeuniversity.onlineeducationsystem.Exception.ErrorCodes;
import com.egeuniversity.onlineeducationsystem.Exception.GenericException;
import com.egeuniversity.onlineeducationsystem.Service.abstracts.CourseService;
import com.egeuniversity.onlineeducationsystem.data.Course;
import com.egeuniversity.onlineeducationsystem.dto.CourseSearchDTO;
import com.egeuniversity.onlineeducationsystem.repository.UserDal;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@RestController
@Tag(name = "Course Service")
@RequestMapping("api/courses")
public class CourseController {

    private final CourseService courseService;
    private final UserDal userDal;
    private final ChapterDal chapterDal;

    private static final Logger logger = LoggerFactory.getLogger(CourseController.class);

    public CourseController(CourseService courseService, UserDal userDal, ChapterDal chapterDal) {
        this.courseService = courseService;
        this.userDal = userDal;
        this.chapterDal = chapterDal;
    }

    @PostMapping()
    @Operation(summary = "Add Course")
    public ResponseEntity<Course> addCourse(@RequestBody @Valid CourseDTO dto) {
        try {
            Course savedCourseDTO = courseService.addCourse(convertDtoToCourse(dto));
            return ResponseEntity.ok(savedCourseDTO);
        } catch (Exception e) {
            logger.error("Error adding course", e);
            throw new GenericException(ErrorCodes.E12_MESSAGE, ErrorCodes.E12_CODE, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/{courseId}/add-user")
    @Operation(summary = "Add User to Course")
    public ResponseEntity<Course> addUserToCourse(@PathVariable String courseId) {
        try {
            Course updatedCourseDTO = courseService.addUserToCourse(courseId, Utility.getUserIdFromToken());
            return ResponseEntity.ok(updatedCourseDTO);
        } catch (Exception e) {
            throw new GenericException(ErrorCodes.E24_MESSAGE, ErrorCodes.E24_CODE, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    @Operation(summary = "Get Course By Id")
    public ResponseEntity<Course> getCourseById(@PathVariable String id) {
        try {
            Course course = courseService.getCourseById(id);
            return ResponseEntity.ok(course);
        } catch (Exception e) {
            logger.error("Error getting course by id", e);
            throw new GenericException(ErrorCodes.E18_MESSAGE, ErrorCodes.E18_CODE, HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{id}")
    @Operation(summary = "Update Course By Id")
    public ResponseEntity<Course> updateCourse(@PathVariable String id, @RequestBody @Valid com.egeuniversity.onlineeducationsystem.dto.CourseDTO dto) {
        try {
            Course updatedCourseDTO = courseService.updateCourse(id, dto);
            return ResponseEntity.ok(updatedCourseDTO);
        } catch (Exception e) {
            logger.error("Error updating course", e);
            throw new GenericException(ErrorCodes.E20_MESSAGE, ErrorCodes.E20_CODE, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    @Operation(summary = "Delete Course By Id")
    public ResponseEntity<String> deleteCourse(@PathVariable String id) {
        try {
            courseService.deleteCourse(id);
            return ResponseEntity.ok("Course deleted successfully");
        } catch (GenericException ge) {
            throw ge;
        } catch (Exception e) {
            logger.error("Error deleting course", e);
            throw new GenericException(ErrorCodes.E15_MESSAGE, ErrorCodes.E15_CODE, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/upload-photo/{id}")
    @Operation(summary = "Upload Course Photo")
    public ResponseEntity<String> handleFileUpload(@PathVariable String id, @RequestParam("file") MultipartFile file) {
        try {
            courseService.handleFileUpload(id, file);
            return ResponseEntity.ok("File uploaded successfully");
        } catch (Exception e) {
            logger.error("Error uploading file", e);
            throw new GenericException(ErrorCodes.E21_MESSAGE, ErrorCodes.E21_CODE, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/search")
    @Operation(summary = "Search Courses")
    public ResponseEntity<List<Course>> searchCourses(@RequestBody CourseSearchDTO dto) {
        try {
            Page<Course> courses = courseService.getAllCourses(dto);
            return ResponseEntity.ok(courses.getContent());
        } catch (Exception e) {
            logger.error("Error searching courses", e);
            throw new GenericException(ErrorCodes.E16_MESSAGE, ErrorCodes.E16_CODE, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("chapter/{id}")
    @Operation(summary = "Get Chapter By Id")
    public ResponseEntity<Chapter> getChapterById(@PathVariable String id) {
        try {
            Chapter chapter = courseService.getChapterById(id);
            return ResponseEntity.ok(chapter);
        } catch (Exception e) {
            logger.error("Error getting chapter by id", e);
            throw new GenericException(ErrorCodes.E29_MESSAGE, ErrorCodes.E29_CODE, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("/chapter")
    @Operation(summary = "Create New Chapter")
    public ResponseEntity<Chapter> createChapter(@RequestBody ChapterDTO chapter) {
        try {
            Chapter createdChapter = courseService.createChapter(chapterDtoTOChapter(chapter));
            return ResponseEntity.ok(createdChapter);
        } catch (Exception e) {
            logger.error("Error creating chapter", e);
            throw new GenericException(ErrorCodes.E29_MESSAGE, ErrorCodes.E29_CODE, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("chapter/{id}")
    @Operation(summary = "Update Chapter By Id")
    public ResponseEntity<Chapter> updateChapter(@PathVariable String id, @RequestBody ChapterDTO chapterDetails) {
        try {
            Chapter updatedChapter = courseService.updateChapter(id, chapterDetails);
            return ResponseEntity.ok(updatedChapter);
        } catch (Exception e) {
            logger.error("Error updating chapter", e);
            throw new GenericException(ErrorCodes.E29_MESSAGE, ErrorCodes.E29_CODE, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("chapter/{id}")
    @Operation(summary = "Delete Chapter By Id")
    public ResponseEntity<String> deleteChapter(@PathVariable String id) {
        try {
            courseService.deleteChapter(id);
            return ResponseEntity.ok("Chapter deleted successfully");
        } catch (Exception e) {
            logger.error("Error deleting chapter", e);
            throw new GenericException(ErrorCodes.E29_MESSAGE, ErrorCodes.E29_CODE, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PostMapping("chapter/{id}/upload")
    @Operation(summary = "Upload Chapter Video")
    public ResponseEntity<String> uploadVideo(@PathVariable String id, @RequestParam("file") MultipartFile file) {
        try {
            String result = courseService.handleChapterFileUpload(id, file);
            return ResponseEntity.ok(result);
        } catch (IOException e) {
            throw new GenericException(ErrorCodes.E29_MESSAGE, ErrorCodes.E29_CODE, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    
    private Course convertDtoToCourse(com.egeuniversity.onlineeducationsystem.dto.CourseDTO dto) {
        Course course = new Course();
        course.setTitle(dto.getTitle());
        course.setDescription(dto.getDescription());
        course.setAttachment(dto.getAttachment());
        course.setCategory(dto.getCategory());
        course.setPrice(dto.getPrice());


        List<Chapter> chapters = new ArrayList<>();
        if (dto.getChapters() != null && !dto.getChapters().isEmpty()) {
            chapters = chapterDal.findAllById(dto.getChapters());
            if (chapters.size() != dto.getChapters().size()) {
                throw new GenericException(String.format(ErrorCodes.E28_MESSAGE, "chapters", "chapter"),
                        ErrorCodes.E28_CODE, HttpStatus.NOT_FOUND);
            }
        }

        List<CourseChapter> productCategories = chapters.stream().map(chapter -> {
            CourseChapter courseChapter = new CourseChapter();
            courseChapter.setChapter(chapter);
            courseChapter.setCourse(course);
            return courseChapter;
        }).toList();

        course.setChapters(productCategories);


        if (userDal.findById(Utility.getUserIdFromToken()).isEmpty()) {
            throw new GenericException(String.format(ErrorCodes.E11_MESSAGE, Utility.getUserIdFromToken()),
                    ErrorCodes.E11_CODE,
                    HttpStatus.NOT_FOUND);
        }

        course.setCreator(userDal.findById(Utility.getUserIdFromToken()).get());

        return course;
    }

    private Chapter chapterDtoTOChapter(ChapterDTO dto){
        Chapter chapter = new Chapter();
        chapter.setTitle(dto.getTitle());
        chapter.setDescription(dto.getDescription());
        return chapter;
    }

}
