package com.portfolio.alpha_dklg.service;

import com.portfolio.alpha_dklg.model.User;
import java.util.List;

public interface UserService {
    User saveUser(User user);
    User getUserById(Long id);
    List<User> getAllUsers();
    User updateUser(Long id, User user);
    void deleteUser(Long id);
} 