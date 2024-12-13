package com.project2.treeshop.controller;

import com.project2.treeshop.entity.SupportRequest;
import com.project2.treeshop.service.SupportRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/support-requests")
public class SupportRequestController {

    @Autowired
    private SupportRequestService supportRequestService;

    // Get all support requests for a user
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<SupportRequest>> getSupportRequestsByUserId(@PathVariable int userId) {
        return ResponseEntity.ok(supportRequestService.getSupportRequestsByUserId(userId));
    }

    // Get all support requests by status
    @GetMapping("/status/{status}")
    public ResponseEntity<List<SupportRequest>> getSupportRequestsByStatus(@PathVariable String status) {
        return ResponseEntity.ok(supportRequestService.getSupportRequestsByStatus(status));
    }

    // Get a specific support request by ID
    @GetMapping("/{id}")
    public ResponseEntity<SupportRequest> getSupportRequestById(@PathVariable int id) {
        Optional<SupportRequest> supportRequest = supportRequestService.getSupportRequestById(id);
        return supportRequest.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Create a new support request
    @PostMapping
    public ResponseEntity<SupportRequest> createSupportRequest(@RequestBody SupportRequest supportRequest) {
        return ResponseEntity.ok(supportRequestService.createSupportRequest(supportRequest));
    }

    // Update the status of a support request
    @PutMapping("/{id}/status")
    public ResponseEntity<SupportRequest> updateSupportRequestStatus(@PathVariable int id, @RequestParam String status) {
        Optional<SupportRequest> updatedRequest = supportRequestService.updateSupportRequestStatus(id, status);
        return updatedRequest.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // Delete a support request
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteSupportRequest(@PathVariable int id) {
        if (supportRequestService.deleteSupportRequest(id)) {
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }
}
