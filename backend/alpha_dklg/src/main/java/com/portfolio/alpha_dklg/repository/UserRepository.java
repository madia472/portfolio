package com.portfolio.alpha_dklg.repository;

import com.portfolio.alpha_dklg.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    // Méthodes personnalisées si nécessaire
} 