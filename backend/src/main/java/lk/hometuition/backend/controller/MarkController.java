package lk.hometuition.backend.controller;

import lk.hometuition.backend.entity.Mark;
import lk.hometuition.backend.repository.MarkRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import jakarta.annotation.PostConstruct;

@RestController
@RequestMapping("/api/marks")
@CrossOrigin(origins = "http://localhost:3000")
public class MarkController {

    @Autowired
    private MarkRepository markRepository;

    @PostConstruct
    public void initMarks() {
        if (markRepository.count() == 0) {
            // Demo data for one student
            String email = "vidu@gmail.com"; // Make sure this matches your logged-in user

            markRepository.save(new Mark(null, email, "Mathematics", "Jul", 65));
            markRepository.save(new Mark(null, email, "Mathematics", "Aug", 72));
            markRepository.save(new Mark(null, email, "Mathematics", "Sep", 78));
            markRepository.save(new Mark(null, email, "Mathematics", "Oct", 85));
        }
    }
}