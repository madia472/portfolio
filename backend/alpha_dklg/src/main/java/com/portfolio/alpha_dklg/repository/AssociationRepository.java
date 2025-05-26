package com.portfolio.alpha_dklg.repository;

import com.portfolio.alpha_dklg.model.Association;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AssociationRepository extends JpaRepository<Association, Long> {
    // Méthodes personnalisées si nécessaire
} 