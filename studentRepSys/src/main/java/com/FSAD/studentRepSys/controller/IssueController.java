package com.FSAD.studentRepSys.controller;

import com.FSAD.studentRepSys.model.Issue;
import com.FSAD.studentRepSys.service.IssueService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/issues")
public class IssueController {
    @Autowired
    private IssueService issueService;

    @PostMapping
    public Issue reportIssue(@RequestBody Issue issue) {
        return issueService.saveIssue(issue);
    }
} 