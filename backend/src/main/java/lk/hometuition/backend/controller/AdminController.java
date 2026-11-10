package lk.hometuition.backend.controller;

import lk.hometuition.backend.entity.TeacherProfile;
import lk.hometuition.backend.entity.User;
import lk.hometuition.backend.repository.TeacherProfileRepository;
import lk.hometuition.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminController {

    @Autowired
    private UserRepository userRepository;

    // 🚀 Added this missing repository injection
    @Autowired
    private TeacherProfileRepository teacherProfileRepository;

    // 1. Get Pending Teachers
    @GetMapping("/teachers/pending")
    public ResponseEntity<?> getPendingTeachers() {
        List<User> pendingTeachers = userRepository.findByRoleAndVerificationStatus("TEACHER", "PENDING");
        return ResponseEntity.ok(pendingTeachers);
    }

    // 2. Get Approved Teachers
    @GetMapping("/teachers/approved")
    public ResponseEntity<?> getApprovedTeachers() {
        List<User> approvedTeachers = userRepository.findByRoleAndVerificationStatus("TEACHER", "APPROVED");
        return ResponseEntity.ok(approvedTeachers);
    }

    // 3. Approve a Teacher
    @PutMapping("/teachers/{id}/approve")
    public ResponseEntity<?> approveTeacher(@PathVariable Long id) {
        User teacher = userRepository.findById(id).orElse(null);
        if (teacher == null) {
            return ResponseEntity.badRequest().body("Teacher not found");
        }
        teacher.setVerificationStatus("APPROVED");
        userRepository.save(teacher);
        return ResponseEntity.ok(Map.of("message", "Teacher approved successfully!"));
    }

    // 4. Get Admin Dashboard Stats
    @GetMapping("/dashboard")
    public ResponseEntity<?> getAdminDashboard() {
        long totalStudents = userRepository.findByRole("STUDENT").size();
        long pendingTeachers = userRepository.findByRoleAndVerificationStatus("TEACHER", "PENDING").size();
        long approvedTeachers = userRepository.findByRoleAndVerificationStatus("TEACHER", "APPROVED").size();
        
        return ResponseEntity.ok(Map.of(
            "totalStudents", totalStudents,
            "pendingTeachers", pendingTeachers,
            "approvedTeachers", approvedTeachers
        ));
    }

    // 5. Update Teacher Profile
    @PutMapping("/teachers/{id}/profile")
    public ResponseEntity<?> updateTeacherProfile(@PathVariable Long id, @RequestBody TeacherProfile profileData) {
        User teacher = userRepository.findById(id).orElse(null);
        if (teacher == null || !teacher.getRole().equals("TEACHER")) {
            return ResponseEntity.badRequest().body("Teacher not found");
        }

        TeacherProfile profile = teacherProfileRepository.findByUserId(id).orElse(new TeacherProfile());
        profile.setUserId(id);
        profile.setSubject(profileData.getSubject());
        profile.setBio(profileData.getBio());
        profile.setQualification(profileData.getQualification());
        profile.setExperience(profileData.getExperience());
        profile.setAvailability(profileData.getAvailability());
        
        teacherProfileRepository.save(profile);
        return ResponseEntity.ok(Map.of("message", "Profile updated successfully!"));
    }
}