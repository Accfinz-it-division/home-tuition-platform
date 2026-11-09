package lk.hometuition.backend.dto;

public class DashboardResponse {
    private String studentName;
    private int activeCourses;
    private String attendance;
    private String averageMark;
    private String nextClassDate;
    private String nextClassName;
    private String continueTopic;
    private String teacherName;
    private String attention1;
    private String attention2;

    // 🚀 Updated Constructor to include new fields
    public DashboardResponse(String studentName, int activeCourses, String attendance, String averageMark, 
                             String nextClassDate, String nextClassName, String continueTopic, 
                             String teacherName, String attention1, String attention2) {
        this.studentName = studentName;
        this.activeCourses = activeCourses;
        this.attendance = attendance;
        this.averageMark = averageMark;
        this.nextClassDate = nextClassDate;
        this.nextClassName = nextClassName;
        this.continueTopic = continueTopic;
        this.teacherName = teacherName;
        this.attention1 = attention1;
        this.attention2 = attention2;
    }

    // Getters
    public String getStudentName() { return studentName; }
    public int getActiveCourses() { return activeCourses; }
    public String getAttendance() { return attendance; }
    public String getAverageMark() { return averageMark; }
    public String getNextClassDate() { return nextClassDate; }
    public String getNextClassName() { return nextClassName; }
    public String getContinueTopic() { return continueTopic; }
    public String getTeacherName() { return teacherName; }
    public String getAttention1() { return attention1; }
    public String getAttention2() { return attention2; }
}