package com.project2.treeshop.service;

import com.project2.treeshop.entity.SupportRequest;
import com.project2.treeshop.repository.SupportRequestRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SupportRequestService {

    @Autowired
    private SupportRequestRepository supportRequestRepository;

    // Get all support requests for a specific user
    public List<SupportRequest> getSupportRequestsByUserId(int userId) {
        return supportRequestRepository.findByUserUserId(userId);
    }

    // Get support requests by status
    public List<SupportRequest> getSupportRequestsByStatus(String status) {
        return supportRequestRepository.findByStatus(status);
    }

    // Get a support request by ID
    public Optional<SupportRequest> getSupportRequestById(int requestId) {
        return supportRequestRepository.findById(requestId);
    }

    // Create a new support request
    public SupportRequest createSupportRequest(SupportRequest supportRequest) {
        return supportRequestRepository.save(supportRequest);
    }

    // Update the status of a support request
    public Optional<SupportRequest> updateSupportRequestStatus(int requestId, String status) {
        return supportRequestRepository.findById(requestId).map(request -> {
            request.setStatus(status);
            return supportRequestRepository.save(request);
        });
    }

    // Delete a support request
    public boolean deleteSupportRequest(int requestId) {
        if (supportRequestRepository.existsById(requestId)) {
            supportRequestRepository.deleteById(requestId);
            return true;
        }
        return false;
    }
}
