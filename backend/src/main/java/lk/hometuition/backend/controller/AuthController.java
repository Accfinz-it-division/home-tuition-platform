package lk.hometuition.backend.controller;

import lk.hometuition.backend.dto.LoginRequest;
import lk.hometuition.backend.dto.RegisterRequest;
import lk.hometuition.backend.entity.User;
import lk.hometuition.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterRequest request) {
        
        // Check if email already exists
        if (userRepository.existsByEmail(request.getEmail())) {
            return ResponseEntity.badRequest().body("Error: Email is already in use!");
        }

        // Create new user
        User newUser = new User();
        newUser.setFullName(request.getFullName());
        newUser.setEmail(request.getEmail());
        newUser.setPassword(passwordEncoder.encode(request.getPassword())); 
        newUser.setRole(request.getRole());
        newUser.setNic(request.getNic());
        newUser.setWhatsapp(request.getWhatsapp());
        
        // 🚀 Set default verification status
        newUser.setVerificationStatus("PENDING");

        // Save to Database
        userRepository.save(newUser);

        return ResponseEntity.ok("User registered successfully!");
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest request) {
        User user = userRepository.findByEmail(request.getEmail()).orElse(null);
        
        if (user == null) {
            return ResponseEntity.badRequest().body("Error: User not found!");
        }

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            return ResponseEntity.badRequest().body("Error: Invalid password!");
        }

        // Build JSON Response
        Map<String, String> response = new HashMap<>();
        response.put("message", "Login successful!");
        response.put("role", user.getRole());
        response.put("name", user.getFullName());
        
        return ResponseEntity.ok(response);
    }
}