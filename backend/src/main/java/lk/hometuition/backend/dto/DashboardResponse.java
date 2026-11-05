package lk.hometuition.backend.dto;

public class DashboardResponse {
    private String studentName;
    private int activeCourses;
    private String attendance;
    private String averageMark;
    private String nextClassDate;
    private String nextClassName;

    public DashboardResponse(String studentName, int activeCourses, String attendance, String averageMark, String nextClassDate, String nextClassName) {
        this.studentName = studentName;
        this.activeCourses = activeCourses;
        this.attendance = attendance;
        this.averageMark = averageMark;
        this.nextClassDate = nextClassDate;
        this.nextClassName = nextClassName;
    }

    // Getters
    public String getStudentName() { return studentName; }
    public int getActiveCourses() { return activeCourses; }
    public String getAttendance() { return attendance; }
    public String getAverageMark() { return averageMark; }
    public String getNextClassDate() { return nextClassDate; }
    public String getNextClassName() { return nextClassName; }
}