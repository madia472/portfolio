package com.portfolio.alpha_dklg.service.impl;

import com.portfolio.alpha_dklg.model.Association;
import com.portfolio.alpha_dklg.repository.AssociationRepository;
import com.portfolio.alpha_dklg.service.AssociationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import jakarta.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class AssociationServiceImpl implements AssociationService {

    @Autowired
    private AssociationRepository associationRepository;

    @Override
    public Association saveAssociation(Association association) {
        return associationRepository.save(association);
    }

    @Override
    public Association getAssociationById(Long id) {
        return associationRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Association not found with id: " + id));
    }

    @Override
    public List<Association> getAllAssociations() {
        return associationRepository.findAll();
    }

    @Override
    public Association updateAssociation(Long id, Association associationDetails) {
        Association association = getAssociationById(id);
        association.setName(associationDetails.getName());
        association.setRole(associationDetails.getRole());
        association.setStartDate(associationDetails.getStartDate());
        association.setEndDate(associationDetails.getEndDate());
        association.setDescription(associationDetails.getDescription());
        return associationRepository.save(association);
    }

    @Override
    public void deleteAssociation(Long id) {
        Association association = getAssociationById(id);
        associationRepository.delete(association);
    }
} 