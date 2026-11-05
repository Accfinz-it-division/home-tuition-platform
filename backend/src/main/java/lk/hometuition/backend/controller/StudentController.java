package lk.hometuition.backend.controller;

import lk.hometuition.backend.dto.DashboardResponse;
import lk.hometuition.backend.entity.User;
import lk.hometuition.backend.repository.CourseRepository;
import lk.hometuition.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/student")
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CourseRepository courseRepository; // 🚀 இது தான் கோர்ஸ் கவுண்ட் எடுக்க உதவும்

    @GetMapping("/dashboard")
    public ResponseEntity<?> getStudentDashboard(@RequestParam String email) {
        
        User user = userRepository.findByEmail(email).orElse(null);
        
        if (user == null || !user.getRole().equals("STUDENT")) {
            return ResponseEntity.badRequest().body("Error: Student not found!");
        }

        // 🚀 இப்போ நாம ஹார்ட்-கோட் 3 னு போடாம, Database-ல எத்தனை கோர்ஸ் இருக்குன்னு எண்ணி எடுக்கிறோம்
        int activeCoursesCount = (int) courseRepository.count();

        DashboardResponse response = new DashboardResponse(
            user.getFullName(),
            activeCoursesCount, // இது இப்போ டைனமிக்
            "92%", 
            "85%", 
            "24 Oct", 
            "Mathematics" 
        );

        return ResponseEntity.ok(response);
    }
}