package com.FSAD.studentRepSys.controller;

import com.FSAD.studentRepSys.model.Attendance;
import com.FSAD.studentRepSys.service.AttendanceService;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/attendance")
public class AttendanceController {
    @Autowired
    private AttendanceService attendanceService;

    @GetMapping("/student/{studentId}")
    public List<Attendance> getAttendanceByStudent(@PathVariable String studentId) {
        return attendanceService.getAttendanceByStudentId(studentId);
    }

    @GetMapping("/student/{studentId}/summary")
    public Map<String, Object> getAttendanceSummaryByStudent(@PathVariable String studentId) {
        List<Attendance> records = attendanceService.getAttendanceByStudentId(studentId);
        Map<String, Object> summary = new HashMap<>();
        for (Attendance att : records) {
            double percent = attendanceService.calculateAttendancePercentage(att);
            Map<String, Object> subj = new HashMap<>();
            subj.put("attended", att.getAttendedClasses());
            subj.put("total", att.getTotalClasses());
            subj.put("percentage", percent);
            summary.put(att.getSubject(), subj);
        }
        return summary;
    }

    @PostMapping
    public Attendance addAttendance(@RequestBody Attendance attendance) {
        return attendanceService.addAttendance(attendance);
    }
} 