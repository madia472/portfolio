package com.portfolio.alpha_dklg.repository;

import com.portfolio.alpha_dklg.model.Interest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface InterestRepository extends JpaRepository<Interest, Long> {
    // Custom methods if needed
} 