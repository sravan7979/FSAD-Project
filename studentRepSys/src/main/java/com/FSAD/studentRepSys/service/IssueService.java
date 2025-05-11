package com.FSAD.studentRepSys.service;

import com.FSAD.studentRepSys.model.Issue;
import com.FSAD.studentRepSys.repository.IssueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class IssueService {
    @Autowired
    private IssueRepository issueRepository;

    public Issue saveIssue(Issue issue) {
        return issueRepository.save(issue);
    }
} 