package com.portfolio.alpha_dklg.service;

import com.portfolio.alpha_dklg.model.Association;
import java.util.List;

public interface AssociationService {
    Association saveAssociation(Association association);
    Association getAssociationById(Long id);
    List<Association> getAllAssociations();
    Association updateAssociation(Long id, Association association);
    void deleteAssociation(Long id);
} 