package lk.hometuition.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "marks")
public class Mark {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String studentEmail; // Which student this belongs to
    private String subject;
    private String month; // e.g., "Jul", "Aug"
    private int score; // 0 to 100

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getStudentEmail() { return studentEmail; }
    public void setStudentEmail(String studentEmail) { this.studentEmail = studentEmail; }

    public String getSubject() { return subject; }
    public void setSubject(String subject) { this.subject = subject; }

    public String getMonth() { return month; }
    public void setMonth(String month) { this.month = month; }

    public int getScore() { return score; }
    public void setScore(int score) { this.score = score; }
}