package lk.hometuition.backend.controller;

import lk.hometuition.backend.entity.ClassSchedule;
import lk.hometuition.backend.repository.ClassScheduleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/classes")
@CrossOrigin(origins = "http://localhost:3000")
public class ClassController {

    @Autowired
    private ClassScheduleRepository classRepository;

    // 🚀 Get all classes (Student)
    @GetMapping
    public ResponseEntity<?> getAllClasses() {
        return ResponseEntity.ok(classRepository.findAll());
    }

    // 🚀 Add new class (Admin/Teacher)
    @PostMapping
    public ResponseEntity<?> createClass(@RequestBody ClassSchedule classSchedule) {
        classRepository.save(classSchedule);
        return ResponseEntity.ok("Class scheduled successfully!");
    }
}