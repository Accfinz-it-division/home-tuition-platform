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

    // 🚀 Get all courses (Public & Student)
    @GetMapping
    public ResponseEntity<?> getAllCourses() {
        List<Course> courses = courseRepository.findAll();
        return ResponseEntity.ok(courses);
    }

    // 🚀 Add new course (Admin Only)
    @PostMapping
    public ResponseEntity<?> createCourse(@RequestBody Course course) {
        courseRepository.save(course);
        return ResponseEntity.ok("Course created successfully!");
    }
}