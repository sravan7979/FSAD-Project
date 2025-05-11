package com.FSAD.studentRepSys.controller;

import com.FSAD.studentRepSys.model.Parent;
import com.FSAD.studentRepSys.service.ParentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/parents")
public class ParentAuthController {
    @Autowired
    private ParentService parentService;

    @PostMapping("/register")
    public ResponseEntity<?> registerParent(@RequestBody Parent parent) {
        if (parentService.findByEmail(parent.getEmail()).isPresent()) {
            return ResponseEntity.badRequest().body("Email already exists");
        }
        if (parentService.findByParentId(parent.getParentId()).isPresent()) {
            return ResponseEntity.badRequest().body("Parent ID already exists");
        }
        Parent savedParent = parentService.registerParent(parent);
        return ResponseEntity.ok(savedParent);
    }

    @PostMapping("/login")
    public ResponseEntity<Object> loginParent(@RequestBody Parent loginRequest) {
        return parentService.loginParent(loginRequest.getEmail(), loginRequest.getPassword())
                .<ResponseEntity<Object>>map(ResponseEntity::ok)
                .orElseGet(() -> ResponseEntity.badRequest().body("Invalid credentials"));
    }
} 