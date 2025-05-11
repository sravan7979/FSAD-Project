package com.FSAD.studentRepSys.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.FSAD.studentRepSys.model.Attendance;
import com.FSAD.studentRepSys.repository.AttendanceRepository;

@Service
public class AttendanceService {
    @Autowired
    private AttendanceRepository attendanceRepository;

    public List<Attendance> getAttendanceByStudentId(String studentId) {
        return attendanceRepository.findByStudentId(studentId);
    }

    public Optional<Attendance> getAttendanceByStudentIdAndSubject(String studentId, String subject) {
        List<Attendance> list = attendanceRepository.findByStudentIdAndSubject(studentId, subject);
        return list.isEmpty() ? Optional.empty() : Optional.of(list.get(0));
    }

    public double calculateAttendancePercentage(Attendance attendance) {
        if (attendance.getTotalClasses() == 0) return 0.0;
        return (attendance.getAttendedClasses() * 100.0) / attendance.getTotalClasses();
    }

    public Attendance addAttendance(Attendance attendance) {
        Optional<Attendance> existingAttendance = getAttendanceByStudentIdAndSubject(
            attendance.getStudentId(), 
            attendance.getSubject()
        );

        if (existingAttendance.isPresent()) {
            Attendance existing = existingAttendance.get();
            existing.setTotalClasses(existing.getTotalClasses() + 1);
            if (attendance.getAttendedClasses() > 0) {
                existing.setAttendedClasses(existing.getAttendedClasses() + 1);
            }
            return attendanceRepository.save(existing);
        } else {
            attendance.setTotalClasses(1);
            attendance.setAttendedClasses(attendance.getAttendedClasses() > 0 ? 1 : 0);
            return attendanceRepository.save(attendance);
        }
    }
} 