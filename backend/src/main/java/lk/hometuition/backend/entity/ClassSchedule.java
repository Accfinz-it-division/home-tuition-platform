package lk.hometuition.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "class_schedules")
public class ClassSchedule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String subject; // e.g., "Grade 11 Mathematics"
    private String topic; // e.g., "Quadratic equations"
    private String teacherName; // e.g., "Kamal Fernando"
    private String date; // e.g., "24 Oct"
    private String time; // e.g., "4:00-6:00 PM"
    private String status; // e.g., "LIVE", "UPCOMING"

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getSubject() { return subject; }
    public void setSubject(String subject) { this.subject = subject; }

    public String getTopic() { return topic; }
    public void setTopic(String topic) { this.topic = topic; }

    public String getTeacherName() { return teacherName; }
    public void setTeacherName(String teacherName) { this.teacherName = teacherName; }

    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }

    public String getTime() { return time; }
    public void setTime(String time) { this.time = time; }

    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
}