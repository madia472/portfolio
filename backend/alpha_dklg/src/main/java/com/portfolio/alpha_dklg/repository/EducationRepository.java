package com.portfolio.alpha_dklg.repository;

import com.portfolio.alpha_dklg.model.Education;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EducationRepository extends JpaRepository<Education, Long> {
    // Custom methods if needed
} 