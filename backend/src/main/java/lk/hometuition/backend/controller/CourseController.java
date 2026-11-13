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

    // 🚀 Add new course (Admin)
    @PostMapping
    public ResponseEntity<?> createCourse(@RequestBody Course course) {
        courseRepository.save(course);
        return ResponseEntity.ok("Course created successfully!");
    }

    // 🚀 Update existing course (Admin)
    @PutMapping("/{id}")
    public ResponseEntity<?> updateCourse(@PathVariable Long id, @RequestBody Course courseDetails) {
        Course course = courseRepository.findById(id).orElse(null);
        if (course == null) {
            return ResponseEntity.badRequest().body("Course not found");
        }
        
        course.setTitle(courseDetails.getTitle());
        course.setSubject(courseDetails.getSubject());
        course.setTeacherName(courseDetails.getTeacherName());
        course.setPrice(courseDetails.getPrice());
        course.setBadge(courseDetails.getBadge());
        
        courseRepository.save(course);
        return ResponseEntity.ok("Course updated successfully!");
    }

    // 🚀 Delete course (Admin)
    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteCourse(@PathVariable Long id) {
        if (!courseRepository.existsById(id)) {
            return ResponseEntity.badRequest().body("Course not found");
        }
        courseRepository.deleteById(id);
        return ResponseEntity.ok("Course deleted successfully!");
    }
}