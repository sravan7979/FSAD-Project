package com.FSAD.studentRepSys.service;

import com.FSAD.studentRepSys.model.Parent;
import com.FSAD.studentRepSys.repository.ParentRepository;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ParentService {
    @Autowired
    private ParentRepository parentRepository;

    public Parent registerParent(Parent parent) {
        // Password should be hashed here in production
        return parentRepository.save(parent);
    }

    public Optional<Parent> loginParent(String email, String password) {
        Optional<Parent> parentOpt = parentRepository.findByEmail(email);
        if (parentOpt.isPresent() && parentOpt.get().getPassword().equals(password)) {
            return parentOpt;
        }
        return Optional.empty();
    }

    public Optional<Parent> findByEmail(String email) {
        return parentRepository.findByEmail(email);
    }

    public Optional<Parent> findByParentId(String parentId) {
        return parentRepository.findByParentId(parentId);
    }
} 