package lk.hometuition.backend.controller;

import lk.hometuition.backend.entity.Resource;
import lk.hometuition.backend.repository.ResourceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/resources")
@CrossOrigin(origins = "http://localhost:3000")
public class ResourceController {

    @Autowired
    private ResourceRepository resourceRepository;

    @GetMapping
    public ResponseEntity<?> getAllResources() {
        return ResponseEntity.ok(resourceRepository.findAll());
    }

    @PostMapping
    public ResponseEntity<?> createResource(@RequestBody Resource resource) {
        resourceRepository.save(resource);
        return ResponseEntity.ok("Resource added successfully!");
    }
}