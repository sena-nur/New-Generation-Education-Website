package com.egeuniversity.onlineeducationsystem.Service.concretes;

import com.egeuniversity.onlineeducationsystem.Exception.ErrorCodes;
import com.egeuniversity.onlineeducationsystem.Exception.GenericException;
import com.egeuniversity.onlineeducationsystem.Service.abstracts.CourseService;
import com.egeuniversity.onlineeducationsystem.data.Chapter;
import com.egeuniversity.onlineeducationsystem.data.Course;
import com.egeuniversity.onlineeducationsystem.data.CourseChapter;
import com.egeuniversity.onlineeducationsystem.data.User;
import com.egeuniversity.onlineeducationsystem.dto.ChapterDTO;
import com.egeuniversity.onlineeducationsystem.dto.CourseDTO;
import com.egeuniversity.onlineeducationsystem.dto.CourseSearchDTO;
import com.egeuniversity.onlineeducationsystem.repository.ChapterDal;
import com.egeuniversity.onlineeducationsystem.repository.UserDal;
import com.egeuniversity.onlineeducationsystem.utility.Utility;
import jakarta.persistence.criteria.Predicate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import com.egeuniversity.onlineeducationsystem.repository.CourseDal;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import static com.egeuniversity.onlineeducationsystem.utility.Utility.getNow;


@Service
public class CourseManager implements CourseService {

    @Autowired
    private ChapterDal chapterDal;

    @Autowired
    private CourseDal courseDal;

    @Autowired
    private UserDal userDal;

    @Override
    public Course addCourse(Course courseDTO) {
        try {
            return courseDal.save(courseDTO);
        } catch (Exception e) {
            throw new RuntimeException("Failed to save course: " + e.getMessage(), e);
        }
    }

    @Override
    public Chapter getChapterById(String id) {
        try {
            if (!chapterDal.existsById(id)) {
                throw new GenericException(ErrorCodes.E29_MESSAGE,
                        ErrorCodes.E29_CODE, HttpStatus.NOT_FOUND);
            }
            return chapterDal.findById(id).get();
        } catch (Exception e) {
            throw new GenericException(ErrorCodes.E29_MESSAGE,
                    ErrorCodes.E29_CODE, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @Override
    public Chapter createChapter(Chapter chapter) {
        try {
            return chapterDal.save(chapter);
        } catch (Exception e) {
            throw new GenericException(ErrorCodes.E29_MESSAGE,
                    ErrorCodes.E29_CODE, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @Override
    public Chapter updateChapter(String id, ChapterDTO chapterDetails) {
        try {
            Chapter chapter = chapterDal.findById(id).orElseThrow(() -> new GenericException(ErrorCodes.E29_MESSAGE,
                    ErrorCodes.E29_CODE, HttpStatus.NOT_FOUND));
            if(chapterDetails.getTitle() != null){
                chapter.setTitle(chapterDetails.getTitle());
            }
            if(chapterDetails.getDescription() != null){
                chapter.setTitle(chapterDetails.getDescription());
            }
            return chapterDal.save(chapter);
        } catch (Exception e) {
            throw new GenericException(ErrorCodes.E29_MESSAGE,
                    ErrorCodes.E29_CODE, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    public void deleteChapter(String id) {
        try {
            Chapter chapter = chapterDal.findById(id).orElseThrow(() -> new GenericException(ErrorCodes.E29_MESSAGE,
                    ErrorCodes.E29_CODE, HttpStatus.INTERNAL_SERVER_ERROR));
            chapterDal.delete(chapter);
        } catch (Exception e) {
            throw new GenericException(ErrorCodes.E29_MESSAGE,
                    ErrorCodes.E29_CODE, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }

    @Override
    public String handleChapterFileUpload(String chapterId, MultipartFile file) throws IOException {
        String fileName = file.getOriginalFilename();
        String saveDirectory = "/home/seckin/IdeaProjects/Online-Education-System/onlineeducationsystembu/files" +
                "/course_pictures";
        File targetFile = new File(saveDirectory + fileName);

        file.transferTo(targetFile);

        Optional<Chapter> chapterOptional = chapterDal.findById(chapterId);
        if (chapterOptional.isEmpty()) {
            throw new GenericException(ErrorCodes.E29_MESSAGE,
                    ErrorCodes.E29_CODE, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        Chapter chapter = chapterOptional.get();

        String fileAccessUrl = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/files/videos/")
                .path(fileName)
                .toUriString();
        chapter.setVideoPath(fileAccessUrl);

        chapterDal.save(chapter);

        return chapter.getTitle() + "," + fileAccessUrl;
    }

    @Override
    public String handleFileUpload(String courseId, MultipartFile file) throws IOException {
        String fileName = file.getOriginalFilename();
        String saveDirectory = "/home/seckin/IdeaProjects/Online-Education-System/onlineeducationsystembu/files" +
                "/course_pictures";
        File targetFile = new File(saveDirectory + fileName);

        file.transferTo(targetFile);

        Optional<Course> courseOptional = courseDal.findById(courseId);
        if (courseOptional.isEmpty()) {
            throw new GenericException(ErrorCodes.E27_MESSAGE, ErrorCodes.E27_CODE, HttpStatus.INTERNAL_SERVER_ERROR);
        }
        Course courseDTO = courseOptional.get();

        String fileAccessUrl = ServletUriComponentsBuilder.fromCurrentContextPath()
                .path("/files/course_pictures/")
                .path(fileName)
                .toUriString();
        courseDTO.setCoursePhoto(fileAccessUrl);

        courseDal.save(courseDTO);

        return courseDTO.getTitle() + "," + fileAccessUrl;
    }

    @Override
    public Course updateCourse(String id, CourseDTO dto) {
        try {
            checkIfTheOperationIsAllowed(id);
            Optional<Course> optionalCourse = courseDal.findById(id);
            if (optionalCourse.isPresent()) {
                Course existingCourse = optionalCourse.get();

                if (dto.getTitle() != null) {
                    existingCourse.setTitle(dto.getTitle());
                }
                if (dto.getDescription() != null) {
                    existingCourse.setDescription(dto.getDescription());
                }
                if (dto.getAttachment() != null) {
                    existingCourse.setAttachment(dto.getAttachment());
                }
                if (dto.getCategory() != null) {
                    existingCourse.setCategory(dto.getCategory());
                }
                if (dto.getPrice() != null) {
                    existingCourse.setPrice(dto.getPrice());
                }

                if (dto.getChapters() != null) {
                    List<Chapter> chapters = chapterDal.findAllById(dto.getChapters());
                    if (chapters.size() != dto.getChapters().size()) {
                        throw new GenericException(String.format(ErrorCodes.E28_MESSAGE, "chapters", "chapter"),
                                ErrorCodes.E28_CODE, HttpStatus.NOT_FOUND);
                    }
                    existingCourse.getChapters().clear();
                    chapters.forEach(chapter -> {
                        CourseChapter courseChapter = new CourseChapter();
                        courseChapter.setChapter(chapter);
                        courseChapter.setCourse(existingCourse);
                        existingCourse.getChapters().add(courseChapter);
                    });
                }

                existingCourse.setUpdatedAt(getNow());

                return courseDal.save(existingCourse);
            } else {
                throw new GenericException(
                        String.format(ErrorCodes.E19_MESSAGE, id), ErrorCodes.E19_CODE, HttpStatus.NOT_FOUND);
            }
        } catch (Exception e) {
            throw new GenericException(ErrorCodes.E20_MESSAGE, ErrorCodes.E20_CODE, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    public Course getCourseById(String id) {
        try {
            return courseDal.findById(id).orElseThrow(() -> new GenericException(
                    String.format(ErrorCodes.E19_MESSAGE, id), ErrorCodes.E19_CODE, HttpStatus.NOT_FOUND));
        } catch (Exception e) {
            throw new GenericException(ErrorCodes.E18_MESSAGE, ErrorCodes.E18_CODE, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @Override
    public Page<Course> getAllCourses(CourseSearchDTO dto) throws Exception {
        validatePageAndSize(dto.getPage(), dto.getSize());

        Specification<Course> spec = (root, query, criteriaBuilder) -> {
            List<Predicate> searchPredicates = new ArrayList<>();

            if (dto.getTitle() != null) {
                searchPredicates.add(criteriaBuilder.like(root.get("title"), "%" + dto.getTitle() + "%"));
            }
            if (dto.getDescription() != null) {
                searchPredicates.add(criteriaBuilder.like(root.get("description"), "%" + dto.getDescription() + "%"));
            }
            if (dto.getCategory() != null) {
                searchPredicates.add(criteriaBuilder.like(root.get("category"), "%" + dto.getCategory() + "%"));
            }
            if (dto.getPrice() != null) {
                searchPredicates.add(criteriaBuilder.equal(root.get("price"), dto.getPrice()));
            }
            if (dto.getCreatorId() != null) {
                searchPredicates.add(criteriaBuilder.equal(root.get("creator").get("id"), dto.getCreatorId()));
            }
            if (dto.isGetAllCoursesCreatedByTheTheUser()) {
                Long id = Utility.getUserIdFromToken();
                searchPredicates.add(criteriaBuilder.equal(root.get("creator").get("id"), id));
            }

            return criteriaBuilder.and(searchPredicates.toArray(new Predicate[0]));
        };

        PageRequest pageRequest = PageRequest.of(dto.getPage() - 1, dto.getSize());
        Page<Course> coursePage;

        try {
            coursePage = courseDal.findAll(spec, pageRequest);
        } catch (Exception e) {
            throw new GenericException(ErrorCodes.E16_MESSAGE, ErrorCodes.E16_CODE, HttpStatus.INTERNAL_SERVER_ERROR);
        }

        return coursePage;
    }

    @Override
    public void deleteCourse(String id) {
        try {
            checkIfTheOperationIsAllowed(id);
            if (courseDal.existsById(id)) {
                courseDal.deleteById(id);
            } else {
                throw new RuntimeException("Course not found with id: " + id);
            }
        } catch (GenericException e) {
            throw e;
        } catch (Exception e) {
            throw new RuntimeException("Failed to delete course: " + e.getMessage(), e);
        }
    }

    @Override
    public Course addUserToCourse(String courseId, Long userId) {
        try {
            Optional<Course> optionalCourse = courseDal.findById(courseId);
            if (optionalCourse.isEmpty()) {
                throw new RuntimeException("Course not found with id: " + courseId);
            }

            Course courseDTO = optionalCourse.get();
            if (!userExists(userId)) {
                throw new RuntimeException("User not found with id: " + userId);
            }

            Optional<User> optionalUser = userDal.findById(userId);
            if (optionalUser.isEmpty()) {
                throw new RuntimeException("User not found with id: " + userId);
            }

            User user = optionalUser.get();
            courseDTO.getStudents().add(user);

            return courseDal.save(courseDTO);
        } catch (Exception e) {
            throw new RuntimeException("Failed to add user to course: " + e.getMessage(), e);
        }
    }

    private void checkIfTheOperationIsAllowed(String courseId) {
        if (courseDal.findById(courseId).isPresent()) {
            Long courseOwner = courseDal.findById(courseId).get().getCreator().getId();
            Long operationOwner = Utility.getUserIdFromToken();
            if (!courseOwner.equals(operationOwner)) {
                throw new GenericException(ErrorCodes.E17_MESSAGE, ErrorCodes.E17_CODE, HttpStatus.UNAUTHORIZED);
            }
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

    public boolean userExists(Long userId) {
        return userDal.existsById(userId);
    }

    private void validatePageAndSize(int page, int size) {
        if (page < 1 || size < 1) {
            throw new IllegalArgumentException("Invalid page or size parameter");
        }
    }
}
