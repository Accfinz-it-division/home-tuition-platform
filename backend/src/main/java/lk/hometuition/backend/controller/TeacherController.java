package lk.hometuition.backend.controller;

import lk.hometuition.backend.entity.*;
import lk.hometuition.backend.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/teacher")
@CrossOrigin(origins = "http://localhost:3000")
public class TeacherController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ClassScheduleRepository classRepository;

    @Autowired
    private ExamRepository examRepository;

    @Autowired
    private ResourceRepository resourceRepository;

    // 🚀 Get Teacher Dashboard Overview Data
    @GetMapping("/dashboard")
    public ResponseEntity<?> getTeacherDashboard(@RequestParam String email) {
        
        User teacher = userRepository.findByEmail(email).orElse(null);
        
        if (teacher == null || !teacher.getRole().equals("TEACHER")) {
            return ResponseEntity.badRequest().body("Error: Teacher not found or invalid role.");
        }

        // Fetch real data
        List<ClassSchedule> myClasses = classRepository.findAll(); // Filter by teacher in real app
        List<Exam> myExams = examRepository.findAll();
        List<Resource> myResources = resourceRepository.findAll();

        // Build response map
        Map<String, Object> response = new HashMap<>();
        response.put("teacherName", teacher.getFullName());
        
        // Counts for Overview
        response.put("totalClasses", myClasses.size());
        response.put("totalExams", myExams.size());
        response.put("totalResources", myResources.size());
        
        // Dummy earnings for now (Can be calculated from Payments later)
        response.put("monthlyEarnings", "LKR 45,000"); 

        // Recent Lists for Short View
        response.put("recentClasses", myClasses.subList(0, Math.min(3, myClasses.size())));
        response.put("recentExams", myExams.subList(0, Math.min(3, myExams.size())));

        return ResponseEntity.ok(response);
    }
}