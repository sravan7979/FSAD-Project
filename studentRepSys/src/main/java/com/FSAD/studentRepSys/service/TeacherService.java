package com.FSAD.studentRepSys.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.FSAD.studentRepSys.model.Teacher;
import com.FSAD.studentRepSys.repository.TeacherRepository;

@Service
public class TeacherService {
    @Autowired
    private TeacherRepository teacherRepository;

    public Teacher registerTeacher(Teacher teacher) {
        // Password should be hashed here in production
        return teacherRepository.save(teacher);
    }

    public Optional<Teacher> loginTeacher(String email, String password) {
        Optional<Teacher> teacherOpt = teacherRepository.findByEmail(email);
        if (teacherOpt.isPresent() && teacherOpt.get().getPassword().equals(password)) {
            return teacherOpt;
        }
        return Optional.empty();
    }

    public Optional<Teacher> findByEmail(String email) {
        return teacherRepository.findByEmail(email);
    }

    public Optional<Teacher> findByEmployeeId(String employeeId) {
        return teacherRepository.findByEmployeeId(employeeId);
    }
} 