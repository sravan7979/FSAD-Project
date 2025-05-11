package com.FSAD.studentRepSys.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.FSAD.studentRepSys.model.Grade;
import com.FSAD.studentRepSys.service.GradeService;

@RestController
@RequestMapping("/api/grades")
public class GradeController {
    @Autowired
    private GradeService gradeService;

    @GetMapping("/student/{studentId}")
    public List<Grade> getGradesByStudent(@PathVariable String studentId) {
        return gradeService.getGradesByStudentId(studentId);
    }

    @PostMapping
    public Grade addGrade(@RequestBody Grade grade) {
        return gradeService.addGrade(grade);
    }

    @GetMapping("/averages")
    public Map<String, Double> getAverageGrades() {
        return gradeService.getAverageGradesByStudent();
    }
} 