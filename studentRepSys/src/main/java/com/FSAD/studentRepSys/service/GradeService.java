package com.FSAD.studentRepSys.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.FSAD.studentRepSys.model.Grade;
import com.FSAD.studentRepSys.repository.GradeRepository;

@Service
public class GradeService {
    @Autowired
    private GradeRepository gradeRepository;

    public List<Grade> getGradesByStudentId(String studentId) {
        return gradeRepository.findByStudentId(studentId);
    }

    public Optional<Grade> getGradeByStudentIdAndSubject(String studentId, String subject) {
        return gradeRepository.findByStudentIdAndSubject(studentId, subject);
    }

    public Grade addGrade(Grade grade) {
        Optional<Grade> existingGrade = getGradeByStudentIdAndSubject(grade.getStudentId(), grade.getSubject());
        if (existingGrade.isPresent()) {
            Grade existing = existingGrade.get();
            existing.setGrade(grade.getGrade());
            existing.setDate(grade.getDate());
            return gradeRepository.save(existing);
        }
        return gradeRepository.save(grade);
    }

    public Map<String, Double> getAverageGradesByStudent() {
        List<Grade> allGrades = gradeRepository.findAll();
        Map<String, List<String>> studentGrades = new HashMap<>();
        
        // Group grades by student
        for (Grade grade : allGrades) {
            studentGrades.computeIfAbsent(grade.getStudentId(), k -> new ArrayList<>())
                        .add(grade.getGrade());
        }
        
        // Calculate average for each student
        Map<String, Double> averages = new HashMap<>();
        for (Map.Entry<String, List<String>> entry : studentGrades.entrySet()) {
            List<String> grades = entry.getValue();
            double sum = 0;
            for (String grade : grades) {
                switch (grade) {
                    case "A+": sum += 4.3; break;
                    case "A": sum += 4.0; break;
                    case "A-": sum += 3.7; break;
                    case "B+": sum += 3.3; break;
                    case "B": sum += 3.0; break;
                    case "B-": sum += 2.7; break;
                    case "C+": sum += 2.3; break;
                    case "C": sum += 2.0; break;
                    case "C-": sum += 1.7; break;
                    case "D+": sum += 1.3; break;
                    case "D": sum += 1.0; break;
                    case "D-": sum += 0.7; break;
                    case "F": sum += 0.0; break;
                }
            }
            averages.put(entry.getKey(), sum / grades.size());
        }
        
        return averages;
    }
} 