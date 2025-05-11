package com.FSAD.studentRepSys.repository;

import com.FSAD.studentRepSys.model.Attendance;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AttendanceRepository extends JpaRepository<Attendance, Long> {
    List<Attendance> findByStudentId(String studentId);
    List<Attendance> findByStudentIdAndSubject(String studentId, String subject);
} 