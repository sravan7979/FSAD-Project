package com.FSAD.studentRepSys.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.FSAD.studentRepSys.model.Student;
import com.FSAD.studentRepSys.service.StudentService;

@RestController
@RequestMapping("/api/students")
public class StudentAuthController {
    @Autowired
    private StudentService studentService;

    @PostMapping("/register")
    public ResponseEntity<?> registerStudent(@RequestBody Student student) {
        if (studentService.getStudentByEmail(student.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body("Email already exists");
        }
        if (studentService.getStudentByStudentId(student.getStudentId()).isPresent()) {
            return ResponseEntity.badRequest().body("Student ID already exists");
        }
        Student savedStudent = studentService.registerStudent(student);
        return ResponseEntity.ok(savedStudent);
    }

    @PostMapping("/login")
    public ResponseEntity<Object> loginStudent(@RequestBody Student loginRequest) {
        return studentService.loginStudent(loginRequest.getEmail(), loginRequest.getPassword())
                .<ResponseEntity<Object>>map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.badRequest().body("Invalid credentials"));
    }
} 