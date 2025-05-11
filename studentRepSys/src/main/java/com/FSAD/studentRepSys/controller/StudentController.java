package com.FSAD.studentRepSys.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.FSAD.studentRepSys.model.Student;
import com.FSAD.studentRepSys.service.StudentService;

@RestController
@RequestMapping("/api/students")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @GetMapping("/section/{section}")
    public List<Student> getStudentsBySection(@PathVariable String section) {
        return studentService.getStudentsBySection(section);
    }

    @GetMapping("/{studentId}")
    public Student getStudentById(@PathVariable String studentId) {
        return studentService.getStudentById(studentId);
    }
} 