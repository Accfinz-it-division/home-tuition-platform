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
@RequestMapping("/api/parent")
@CrossOrigin(origins = "http://localhost:3000")
public class ParentController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private MarkRepository markRepository;

    @Autowired
    private PaymentRepository paymentRepository;

    // 🚀 Get Parent Dashboard Data
    @GetMapping("/dashboard")
    public ResponseEntity<?> getParentDashboard(@RequestParam String parentEmail) {
        
        // 1. Find the Parent
        User parent = userRepository.findByEmail(parentEmail).orElse(null);
        
        if (parent == null || !parent.getRole().equals("PARENT")) {
            return ResponseEntity.badRequest().body("Error: Parent not found or invalid role.");
        }

        // 2. Find a Student (For demo, we take the first student)
        // In a real app, you would find the student linked to this specific parent.
        List<User> students = userRepository.findByRole("STUDENT");
        User child = students.isEmpty() ? null : students.get(0); 

        if (child == null) {
            return ResponseEntity.badRequest().body("Error: No student data available in the system.");
        }

        String childEmail = child.getEmail();

        // 🚀 Fetch Real Data
        List<Course> childCourses = courseRepository.findAll(); 
        List<Mark> childMarks = markRepository.findByStudentEmail(childEmail);
        List<Payment> childPayments = paymentRepository.findAll(); 

        // Build Response
        Map<String, Object> response = new HashMap<>();
        
        // Child Profile Details
        Map<String, String> childProfile = new HashMap<>();
        childProfile.put("fullName", child.getFullName());
        childProfile.put("email", child.getEmail());
        childProfile.put("school", "Visakha Vidyalaya"); // Example
        childProfile.put("medium", "Sinhala"); // Example
        childProfile.put("linkedSince", "01 September 2026");
        response.put("childProfile", childProfile);

        // Overview Summary
        response.put("activeCoursesCount", childCourses.size());
        response.put("examsCount", childMarks.size());
        response.put("paymentsCount", childPayments.size());
        response.put("attendance", "92%"); 

        // List Data
        response.put("courses", childCourses);
        response.put("marks", childMarks);
        response.put("payments", childPayments);

        return ResponseEntity.ok(response);
    }
}