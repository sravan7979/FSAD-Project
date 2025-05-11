package com.FSAD.studentRepSys.repository;

import com.FSAD.studentRepSys.model.Remark;
import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RemarkRepository extends JpaRepository<Remark, Long> {
    List<Remark> findByStudentId(String studentId);
} 