package lk.hometuition.backend.controller;

import lk.hometuition.backend.entity.ClassSchedule;
import lk.hometuition.backend.entity.User;
import lk.hometuition.backend.repository.ClassScheduleRepository;
import lk.hometuition.backend.repository.CourseRepository;
import lk.hometuition.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/student")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class StudentController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CourseRepository courseRepository;

    // 🚀 Inject the new repository
    @Autowired
    private ClassScheduleRepository classRepository; 

    @GetMapping("/dashboard")
    public ResponseEntity<?> getStudentDashboard(@RequestParam String email) {
        
        User user = userRepository.findByEmail(email).orElse(null);
        
        if (user == null || !user.getRole().equals("STUDENT")) {
            return ResponseEntity.badRequest().body("Error: Student not found!");
        }

        int activeCoursesCount = (int) courseRepository.count();

        // 🚀 Fetch real class data from Database
        List<ClassSchedule> upcomingClasses = classRepository.findAll();
        ClassSchedule nextClass = upcomingClasses.isEmpty() ? null : upcomingClasses.get(0);

        // 🚀 Build the response dynamically
        Map<String, Object> response = Map.of(
            "studentName", user.getFullName(),
            "activeCourses", activeCoursesCount,
            "attendance", "92%",
            "averageMark", "85%",
            "nextClassName", nextClass != null ? nextClass.getSubject() : "-",
            "nextClassDate", nextClass != null ? nextClass.getDate() : "-",
            "continueTopic", nextClass != null ? nextClass.getTopic() : "-",
            "teacherName", nextClass != null ? nextClass.getTeacherName() : "-",
            "attention1", "Algebra quiz available",
            "attention2", "New lesson notes uploaded"
        );

        return ResponseEntity.ok(response);
    }
}