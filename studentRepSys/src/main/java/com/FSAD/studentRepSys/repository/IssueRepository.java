package com.FSAD.studentRepSys.repository;

import com.FSAD.studentRepSys.model.Issue;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface IssueRepository extends JpaRepository<Issue, Long> {} 