package com.FSAD.studentRepSys.model;

import jakarta.persistence.*;

@Entity
@Table(name = "attendance")
public class Attendance {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "student_id", nullable = false)
    private String studentId;

    @Column(nullable = false)
    private String subject;

    @Column(name = "attended_classes", nullable = false)
    private Integer attendedClasses;

    @Column(name = "total_classes", nullable = false)
    private Integer totalClasses;

    public Attendance() {}

    public Attendance(Long id, String studentId, String subject, Integer attendedClasses, Integer totalClasses) {
        this.id = id;
        this.studentId = studentId;
        this.subject = subject;
        this.attendedClasses = attendedClasses;
        this.totalClasses = totalClasses;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getStudentId() { return studentId; }
    public void setStudentId(String studentId) { this.studentId = studentId; }
    public String getSubject() { return subject; }
    public void setSubject(String subject) { this.subject = subject; }
    public Integer getAttendedClasses() { return attendedClasses; }
    public void setAttendedClasses(Integer attendedClasses) { this.attendedClasses = attendedClasses; }
    public Integer getTotalClasses() { return totalClasses; }
    public void setTotalClasses(Integer totalClasses) { this.totalClasses = totalClasses; }
} 