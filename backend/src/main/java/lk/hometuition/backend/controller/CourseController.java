package lk.hometuition.backend.controller;

import lk.hometuition.backend.entity.Course;
import lk.hometuition.backend.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.annotation.PostConstruct;
import java.util.List;

@RestController
@RequestMapping("/api/courses")
@CrossOrigin(origins = "http://localhost:3000")
public class CourseController {

    @Autowired
    private CourseRepository courseRepository;

    // 🚀 Adding Demo Courses to Database on Startup
    @PostConstruct
    public void initCourses() {
        if (courseRepository.count() == 0) {
            
            // 1. Language Course
            Course c1 = new Course();
            c1.setTitle("Speak with Confidence.");
            c1.setSubject("Spoken English");
            c1.setTeacherName("Ms. Sarah");
            c1.setPrice("LKR 2,500");
            c1.setBadge("Language • All levels");
            c1.setProgress("0%");
            courseRepository.save(c1);

            // 2. IT Course
            Course c2 = new Course();
            c2.setTitle("Build the Web.");
            c2.setSubject("Full Stack Web Dev");
            c2.setTeacherName("Mr. Suresh");
            c2.setPrice("LKR 5,000");
            c2.setBadge("IT • Beginner to Pro");
            c2.setProgress("0%");
            courseRepository.save(c2);

            // 3. Design Course
            Course c3 = new Course();
            c3.setTitle("Design your future.");
            c3.setSubject("Graphic Design");
            c3.setTeacherName("Ms. Anushka");
            c3.setPrice("LKR 3,000");
            c3.setBadge("Skill • Creative Arts");
            c3.setProgress("0%");
            courseRepository.save(c3);
        }
    }

    // 🚀 Get all courses
    @GetMapping
    public ResponseEntity<?> getAllCourses() {
        List<Course> courses = courseRepository.findAll();
        return ResponseEntity.ok(courses);
    }
}