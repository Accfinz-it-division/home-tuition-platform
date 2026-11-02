package lk.hometuition.backend.controller;

import lk.hometuition.backend.dto.RegisterRequest;
import lk.hometuition.backend.entity.User;
import lk.hometuition.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000") // Frontend-ஐ அனுமதிக்க
public class AuthController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterRequest request) {
        
        // ஈமெயில் ஏற்கனவே இருக்கான்னு செக் பண்றோம்
        if (userRepository.existsByEmail(request.getEmail())) {
            return ResponseEntity.badRequest().body("Error: Email is already in use!");
        }

        // புது யூசரை உருவாக்குறோம்
        User newUser = new User();
        newUser.setFullName(request.getFullName());
        newUser.setEmail(request.getEmail());
        // ⚠️ இப்போதைக்கு பாஸ்வேர்டை அப்படியே சேவ் பண்றோம். (பின்னாடி Encrypt பண்ணலாம்)
        newUser.setPassword(request.getPassword()); 
        newUser.setRole(request.getRole());
        newUser.setNic(request.getNic());
        newUser.setWhatsapp(request.getWhatsapp());

        // Database-ல சேவ் பண்றோம்
        userRepository.save(newUser);

        return ResponseEntity.ok("User registered successfully!");
    }
}