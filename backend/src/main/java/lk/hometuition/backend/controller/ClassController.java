package lk.hometuition.backend.controller;

import lk.hometuition.backend.entity.ClassSchedule;
import lk.hometuition.backend.repository.ClassScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.annotation.PostConstruct;
import java.util.List;

@RestController
@RequestMapping("/api/classes")
@CrossOrigin(origins = "http://localhost:3000")
public class ClassController {

    @Autowired
    private ClassScheduleRepository classRepository;

    // 🚀 Adding Demo Classes to Database
    @PostConstruct
    public void initClasses() {
        if (classRepository.count() == 0) {
            ClassSchedule c1 = new ClassSchedule();
            c1.setSubject("Grade 11 Mathematics");
            c1.setTopic("Quadratic equations");
            c1.setTeacherName("Kamal Fernando");
            c1.setDate("24 Oct");
            c1.setTime("4:00-6:00 PM");
            c1.setStatus("UPCOMING");
            classRepository.save(c1);

            ClassSchedule c2 = new ClassSchedule();
            c2.setSubject("Grade 11 Science");
            c2.setTopic("Cells & living systems");
            c2.setTeacherName("Ishara Senanayake");
            c2.setDate("26 Oct");
            c2.setTime("2:00-4:00 PM");
            c2.setStatus("UPCOMING");
            classRepository.save(c2);
        }
    }

    // 🚀 Get all classes
    @GetMapping
    public ResponseEntity<?> getAllClasses() {
        List<ClassSchedule> classes = classRepository.findAll();
        return ResponseEntity.ok(classes);
    }
}