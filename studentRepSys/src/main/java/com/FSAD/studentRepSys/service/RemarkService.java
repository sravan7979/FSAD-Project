package com.FSAD.studentRepSys.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.FSAD.studentRepSys.model.Remark;
import com.FSAD.studentRepSys.repository.RemarkRepository;

@Service
public class RemarkService {
    @Autowired
    private RemarkRepository remarkRepository;

    public List<Remark> getRemarksByStudentId(String studentId) {
        return remarkRepository.findByStudentId(studentId);
    }

    public Remark addRemark(Remark remark) {
        return remarkRepository.save(remark);
    }
} 