package com.project2.treeshop.service;

import com.project2.treeshop.entity.User;
import com.project2.treeshop.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    // Fetch all users
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    // Fetch a single user by ID
    public Optional<User> getUserById(int userId) {
        return userRepository.findById(userId);
    }

    // Create a new user
    public User createUser(User user) {
        return userRepository.save(user);
    }

    // Update an existing user
    public Optional<User> updateUser(int userId, User updatedUser) {
        return userRepository.findById(userId).map(existingUser -> {
            existingUser.setUsername(updatedUser.getUsername());
            existingUser.setEmail(updatedUser.getEmail());
            existingUser.setPasswordHash(updatedUser.getPasswordHash());
            existingUser.setAddress(updatedUser.getAddress());
            existingUser.setPhoneNumber(updatedUser.getPhoneNumber());
            return userRepository.save(existingUser);
        });
    }

    // Delete a user
    public boolean deleteUser(int userId) {
        if (userRepository.existsById(userId)) {
            userRepository.deleteById(userId);
            return true;
        }
        return false;
    }
}
