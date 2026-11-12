package lk.hometuition.backend.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "resources")
public class Resource {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String type; // Notes, Past Paper, Quiz, etc.
    private String format; // PDF, Video, etc.
    private String date;
    private String actionUrl; // Link to download or watch

    // Getters and Setters
    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }

    public String getTitle() { return title; }
    public void setTitle(String title) { this.title = title; }

    public String getType() { return type; }
    public void setType(String type) { this.type = type; }

    public String getFormat() { return format; }
    public void setFormat(String format) { this.format = format; }

    public String getDate() { return date; }
    public void setDate(String date) { this.date = date; }

    public String getActionUrl() { return actionUrl; }
    public void setActionUrl(String actionUrl) { this.actionUrl = actionUrl; }

        // In Exam.java
    private String fileUrl; 

    public String getFileUrl() { return fileUrl; }
    public void setFileUrl(String fileUrl) { this.fileUrl = fileUrl; }
}