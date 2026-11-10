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
@RequestMapping("/api/student")
@CrossOrigin(origins = "http://localhost:3000")
public class StudentController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private CourseRepository courseRepository;

    @Autowired
    private ClassScheduleRepository classRepository;

    @Autowired
    private ExamRepository examRepository;

    @Autowired
    private ResourceRepository resourceRepository;

    @Autowired
    private MarkRepository markRepository; // 🚀 Added Mark Repository

    @GetMapping("/dashboard")
    public ResponseEntity<?> getStudentDashboard(@RequestParam String email) {
        
        User user = userRepository.findByEmail(email).orElse(null);
        
        if (user == null || !user.getRole().equals("STUDENT")) {
            return ResponseEntity.badRequest().body("Error: Student not found!");
        }

        List<Course> allCourses = courseRepository.findAll();
        List<ClassSchedule> allClasses = classRepository.findAll();
        List<Exam> allExams = examRepository.findAll();
        List<Resource> allResources = resourceRepository.findAll();
        
        // 🚀 Get real Marks from Database
        List<Mark> studentMarks = markRepository.findByStudentEmail(email);

        ClassSchedule nextClass = allClasses.isEmpty() ? null : allClasses.get(0);

        Map<String, Object> response = new HashMap<>();
        response.put("studentName", user.getFullName());
        
        response.put("activeCoursesCount", allCourses.size());
        response.put("upcomingClassesCount", allClasses.size());
        response.put("examsCount", allExams.size());
        response.put("resourcesCount", allResources.size());

        response.put("nextClassName", nextClass != null ? nextClass.getSubject() : "No upcoming classes");
        response.put("nextClassTopic", nextClass != null ? nextClass.getTopic() : "-");
        response.put("nextClassDate", nextClass != null ? nextClass.getDate() : "-");
        response.put("nextClassTime", nextClass != null ? nextClass.getTime() : "-");
        response.put("teacherName", nextClass != null ? nextClass.getTeacherName() : "-");

        // 🚀 Send Marks to Frontend
        response.put("marksData", studentMarks);

        return ResponseEntity.ok(response);
    }
}