package com.FSAD.studentRepSys.controller;

import com.FSAD.studentRepSys.model.Remark;
import com.FSAD.studentRepSys.service.RemarkService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/remarks")
public class RemarkController {
    @Autowired
    private RemarkService remarkService;

    @GetMapping("/student/{studentId}")
    public List<Remark> getRemarksByStudent(@PathVariable String studentId) {
        return remarkService.getRemarksByStudentId(studentId);
    }

    @PostMapping
    public Remark addRemark(@RequestBody Remark remark) {
        return remarkService.addRemark(remark);
    }
} 