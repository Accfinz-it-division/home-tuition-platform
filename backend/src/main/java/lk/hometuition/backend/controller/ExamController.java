package lk.hometuition.backend.controller;

import lk.hometuition.backend.entity.Exam;
import lk.hometuition.backend.repository.ExamRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/exams")
@CrossOrigin(origins = "http://localhost:3000")
public class ExamController {

    @Autowired
    private ExamRepository examRepository;

    @GetMapping
    public ResponseEntity<?> getAllExams() {
        return ResponseEntity.ok(examRepository.findAll());
    }

    @PostMapping
    public ResponseEntity<?> createExam(@RequestBody Exam exam) {
        examRepository.save(exam);
        return ResponseEntity.ok("Exam created successfully!");
    }
}