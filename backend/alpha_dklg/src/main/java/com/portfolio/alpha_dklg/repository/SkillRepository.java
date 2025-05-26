package com.portfolio.alpha_dklg.repository;

import com.portfolio.alpha_dklg.model.Skill;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SkillRepository extends JpaRepository<Skill, Long> {
    // Custom methods if needed
} 