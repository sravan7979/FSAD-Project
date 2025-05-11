package com.FSAD.studentRepSys.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.FSAD.studentRepSys.model.Student;
import com.FSAD.studentRepSys.repository.StudentRepository;

@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;

    public Student registerStudent(Student student) {
        // Password should be hashed here in production
        return studentRepository.save(student);
    }

    public Optional<Student> loginStudent(String email, String password) {
        Optional<Student> studentOpt = studentRepository.findByEmail(email);
        if (studentOpt.isPresent() && studentOpt.get().getPassword().equals(password)) {
            return studentOpt;
        }
        return Optional.empty();
    }

    public Optional<Student> getStudentById(Long id) {
        return studentRepository.findById(id);
    }

    public Optional<Student> getStudentByEmail(String email) {
        return studentRepository.findByEmail(email);
    }

    public Optional<Student> getStudentByStudentId(String studentId) {
        return studentRepository.findByStudentId(studentId);
    }

    public List<Student> getStudentsBySection(String section) {
        return studentRepository.findBySection(section);
    }

    public Student getStudentById(String studentId) {
        return studentRepository.findByStudentId(studentId)
            .orElseThrow(() -> new RuntimeException("Student not found with ID: " + studentId));
    }
} 