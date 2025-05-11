package com.FSAD.studentRepSys.controller;

import com.FSAD.studentRepSys.model.Teacher;
import com.FSAD.studentRepSys.service.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/teachers")
public class TeacherAuthController {
    @Autowired
    private TeacherService teacherService;

    @PostMapping("/register")
    public ResponseEntity<?> registerTeacher(@RequestBody Teacher teacher) {
        if (teacherService.findByEmail(teacher.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body("Email already exists");
        }
        if (teacherService.findByEmployeeId(teacher.getEmployeeId()).isPresent()) {
            return ResponseEntity.badRequest().body("Employee ID already exists");
        }
        Teacher savedTeacher = teacherService.registerTeacher(teacher);
        return ResponseEntity.ok(savedTeacher);
    }

    @PostMapping("/login")
    public ResponseEntity<Object> loginTeacher(@RequestBody Teacher loginRequest) {
        return teacherService.loginTeacher(loginRequest.getEmail(), loginRequest.getPassword())
                .<ResponseEntity<Object>>map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.badRequest().body("Invalid credentials"));
    }
} 