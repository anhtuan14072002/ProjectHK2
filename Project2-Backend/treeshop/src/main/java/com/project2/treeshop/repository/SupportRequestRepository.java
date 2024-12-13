package com.project2.treeshop.repository;

import com.project2.treeshop.entity.SupportRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface SupportRequestRepository extends JpaRepository<SupportRequest, Integer> {
    List<SupportRequest> findByUserUserId(int userId);
    List<SupportRequest> findByStatus(String status);
}
