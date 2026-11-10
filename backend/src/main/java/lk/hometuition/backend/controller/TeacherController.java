package lk.hometuition.backend.controller;

import lk.hometuition.backend.entity.TeacherProfile;
import lk.hometuition.backend.entity.User;
import lk.hometuition.backend.repository.TeacherProfileRepository;
import lk.hometuition.backend.repository.UserRepository;
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
    private TeacherProfileRepository profileRepository;

    // 🚀 Get All Approved Teachers with their Profiles
    @GetMapping("/all")
    public ResponseEntity<?> getAllTeachers() {
        List<User> teachers = userRepository.findByRoleAndVerificationStatus("TEACHER", "APPROVED");
        
        List<Map<String, Object>> response = teachers.stream().map(teacher -> {
            Map<String, Object> map = new HashMap<>();
            map.put("id", teacher.getId());
            map.put("fullName", teacher.getFullName());
            map.put("email", teacher.getEmail());
            map.put("whatsapp", teacher.getWhatsapp());
            
            // Fetch Profile data if exists
            profileRepository.findByUserId(teacher.getId()).ifPresent(profile -> {
                map.put("subject", profile.getSubject());
                map.put("bio", profile.getBio());
                map.put("qualification", profile.getQualification());
                map.put("experience", profile.getExperience());
                map.put("availability", profile.getAvailability());
            });
            
            return map;
        }).toList();

        return ResponseEntity.ok(response);
    }

    // 🚀 Get Single Teacher Profile by ID
    @GetMapping("/{id}")
    public ResponseEntity<?> getTeacherById(@PathVariable Long id) {
        User teacher = userRepository.findById(id).orElse(null);
        if (teacher == null || !teacher.getRole().equals("TEACHER")) {
            return ResponseEntity.badRequest().body("Teacher not found");
        }

        Map<String, Object> map = new HashMap<>();
        map.put("id", teacher.getId());
        map.put("fullName", teacher.getFullName());
        map.put("email", teacher.getEmail());
        map.put("whatsapp", teacher.getWhatsapp());

        profileRepository.findByUserId(teacher.getId()).ifPresent(profile -> {
            map.put("subject", profile.getSubject());
            map.put("bio", profile.getBio());
            map.put("qualification", profile.getQualification());
            map.put("experience", profile.getExperience());
            map.put("availability", profile.getAvailability());
        });

        return ResponseEntity.ok(map);
    }
}