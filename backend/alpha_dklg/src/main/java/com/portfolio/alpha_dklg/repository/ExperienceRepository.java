package com.portfolio.alpha_dklg.repository;

import com.portfolio.alpha_dklg.model.Experience;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExperienceRepository extends JpaRepository<Experience, Long> {
    // Méthodes personnalisées si nécessaire
} 