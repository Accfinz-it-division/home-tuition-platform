package lk.hometuition.backend.controller;

import lk.hometuition.backend.entity.*;
import lk.hometuition.backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/admin/manage")
@CrossOrigin(origins = "http://localhost:3000")
public class MasterAdminController {

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private ClassScheduleRepository classRepository;

    // 🚀 1. COURSES MANAGEMENT
    @PostMapping("/courses")
    public ResponseEntity<?> addCourse(@RequestBody Course course) {
        courseRepository.save(course);
        return ResponseEntity.ok(Map.of("message", "Course added successfully!"));
    }

    @PutMapping("/courses/{id}")
    public ResponseEntity<?> updateCourse(@PathVariable Long id, @RequestBody Course courseData) {
        Course course = courseRepository.findById(id).orElse(null);
        if (course == null) return ResponseEntity.badRequest().body("Course not found");

        course.setTitle(courseData.getTitle());
        course.setSubject(courseData.getSubject());
        course.setTeacherName(courseData.getTeacherName());
        course.setPrice(courseData.getPrice());
        course.setBadge(courseData.getBadge());
        course.setProgress(courseData.getProgress());
        
        courseRepository.save(course);
        return ResponseEntity.ok(Map.of("message", "Course updated successfully!"));
    }

    @DeleteMapping("/courses/{id}")
    public ResponseEntity<?> deleteCourse(@PathVariable Long id) {
        courseRepository.deleteById(id);
        return ResponseEntity.ok(Map.of("message", "Course deleted successfully!"));
    }

    // 🚀 2. LIVE CLASSES MANAGEMENT
    @PostMapping("/classes")
    public ResponseEntity<?> addClass(@RequestBody ClassSchedule classSchedule) {
        classRepository.save(classSchedule);
        return ResponseEntity.ok(Map.of("message", "Class added successfully!"));
    }

    @DeleteMapping("/classes/{id}")
    public ResponseEntity<?> deleteClass(@PathVariable Long id) {
        classRepository.deleteById(id);
        return ResponseEntity.ok(Map.of("message", "Class deleted successfully!"));
    }
}