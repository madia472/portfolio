package com.portfolio.alpha_dklg.repository;

import com.portfolio.alpha_dklg.model.Language;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LanguageRepository extends JpaRepository<Language, Long> {
    // Custom methods if needed
} 