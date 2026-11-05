package lk.hometuition.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "courses")
public class Course {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String subject;
    private String teacherName;
    private String price;
    private String badge;
    private String progress; // ஸ்டூடண்ட் ப்ரோக்ரஸ் (உ-ம்: 65%)

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getSubject() { return subject; }
    public void setSubject(String subject) { this.subject = subject; }

    public String getTeacherName() { return teacherName; }
    public void setTeacherName(String teacherName) { this.teacherName = teacherName; }

    public String getPrice() { return price; }
    public void setPrice(String price) { this.price = price; }

    public String getBadge() { return badge; }
    public void setBadge(String badge) { this.badge = badge; }

    public String getProgress() { return progress; }
    public void setProgress(String progress) { this.progress = progress; }
}