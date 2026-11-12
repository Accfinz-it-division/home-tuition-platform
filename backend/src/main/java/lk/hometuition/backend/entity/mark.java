package lk.hometuition.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "marks")
public class Mark {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String studentEmail;
    private String subject;
    private String month;
    private int score;

    public Mark() {
    }

    public Mark(Long id, String studentEmail, String subject, String month, int score) {
        this.id = id;
        this.studentEmail = studentEmail;
        this.subject = subject;
        this.month = month;
        this.score = score;
    }

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