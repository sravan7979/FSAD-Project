package com.FSAD.studentRepSys.repository;

import com.FSAD.studentRepSys.model.Parent;
import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ParentRepository extends JpaRepository<Parent, Long> {
    Optional<Parent> findByEmail(String email);
    Optional<Parent> findByParentId(String parentId);
} 