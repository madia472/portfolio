package com.portfolio.alpha_dklg.service.impl;

import com.portfolio.alpha_dklg.model.User;
import com.portfolio.alpha_dklg.repository.UserRepository;
import com.portfolio.alpha_dklg.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import jakarta.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User saveUser(User user) {
        return userRepository.save(user);
    }

    @Override
    public User getUserById(Long id) {
        return userRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("User not found with id: " + id));
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User updateUser(Long id, User userDetails) {
        User user = getUserById(id);
        user.setName(userDetails.getName());
        user.setTitle(userDetails.getTitle());
        user.setBio(userDetails.getBio());
        user.setPhotoUrl(userDetails.getPhotoUrl());
        user.setEmail(userDetails.getEmail());
        user.setLinkedin(userDetails.getLinkedin());
        user.setGithub(userDetails.getGithub());
        user.setCvUrl(userDetails.getCvUrl());
        return userRepository.save(user);
    }

    @Override
    public void deleteUser(Long id) {
        User user = getUserById(id);
        userRepository.delete(user);
    }
} 