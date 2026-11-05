package lk.hometuition.backend.controller;

import lk.hometuition.backend.entity.Course;
import lk.hometuition.backend.repository.CourseRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import jakarta.annotation.PostConstruct;
import java.util.List;

@RestController
@RequestMapping("/api/courses")
@CrossOrigin(origins = "http://localhost:3000")
public class CourseController {

    @Autowired
    private CourseRepository courseRepository;

    // 🚀 ஸ்டார்ட் ஆகும்போது டெமோ டேட்டாவை Database-ல சேர்க்கிறோம்
    @PostConstruct
    public void initCourses() {
        if (courseRepository.count() == 0) {
            Course c1 = new Course();
            c1.setTitle("A formula for success.");
            c1.setSubject("Grade 11 Mathematics");
            c1.setTeacherName("Kamal Fernando");
            c1.setPrice("LKR 3,500");
            c1.setBadge("O/L • Sinhala medium");
            c1.setProgress("65%");
            courseRepository.save(c1);

            Course c2 = new Course();
            c2.setTitle("Explore. Discover.");
            c2.setSubject("Grade 11 Science");
            c2.setTeacherName("Ishara Senanayake");
            c2.setPrice("LKR 3,000");
            c2.setBadge("O/L • Sinhala medium");
            c2.setProgress("42%");
            courseRepository.save(c2);

            Course c3 = new Course();
            c3.setTitle("Words open worlds.");
            c3.setSubject("Grade 11 English");
            c3.setTeacherName("Anushka Silva");
            c3.setPrice("LKR 2,500");
            c3.setBadge("O/L • English medium");
            c3.setProgress("78%");
            courseRepository.save(c3);
        }
    }

    @GetMapping
    public List<Course> getAllCourses() {
        return courseRepository.findAll();
    }
}