package lk.hometuition.backend.controller;

import lk.hometuition.backend.entity.Course;
import lk.hometuition.backend.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
@CrossOrigin(origins = "http://localhost:3000")
public class CourseController {

    @Autowired
    private CourseRepository courseRepository;

    // 🚀 Get all courses
    @GetMapping
    public ResponseEntity<?> getAllCourses() {
        return ResponseEntity.ok(courseRepository.findAll());
    }

    // 🚀 Add new course
    @PostMapping
    public ResponseEntity<?> createCourse(@RequestBody Course course) {
        courseRepository.save(course);
        return ResponseEntity.ok("Course created successfully!");
    }
}