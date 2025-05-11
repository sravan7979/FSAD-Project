package com.FSAD.studentRepSys.model;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "remarks")
public class Remark {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "student_id", nullable = false)
    private String studentId;

    @Column(nullable = false)
    private LocalDate date;

    @Column(nullable = false)
    private String remark;

    public Remark() {}

    public Remark(Long id, String studentId, LocalDate date, String remark) {
        this.id = id;
        this.studentId = studentId;
        this.date = date;
        this.remark = remark;
    }

    public Long getId() { return id; }
    public void setId(Long id) { this.id = id; }
    public String getStudentId() { return studentId; }
    public void setStudentId(String studentId) { this.studentId = studentId; }
    public LocalDate getDate() { return date; }
    public void setDate(LocalDate date) { this.date = date; }
    public String getRemark() { return remark; }
    public void setRemark(String remark) { this.remark = remark; }
} 