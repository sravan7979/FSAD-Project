package com.FSAD.studentRepSys.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.FSAD.studentRepSys.model.Grade;

@Repository
public interface GradeRepository extends JpaRepository<Grade, Long> {
    List<Grade> findByStudentId(String studentId);
    Optional<Grade> findByStudentIdAndSubject(String studentId, String subject);
} 