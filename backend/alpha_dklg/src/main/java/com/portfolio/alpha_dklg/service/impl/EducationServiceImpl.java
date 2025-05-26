package com.portfolio.alpha_dklg.service.impl;

import com.portfolio.alpha_dklg.model.Education;
import com.portfolio.alpha_dklg.repository.EducationRepository;
import com.portfolio.alpha_dklg.service.EducationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import jakarta.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class EducationServiceImpl implements EducationService {

    @Autowired
    private EducationRepository educationRepository;

    @Override
    public Education saveEducation(Education education) {
        return educationRepository.save(education);
    }

    @Override
    public Education getEducationById(Long id) {
        return educationRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Education not found with id: " + id));
    }

    @Override
    public List<Education> getAllEducations() {
        return educationRepository.findAll();
    }

    @Override
    public Education updateEducation(Long id, Education educationDetails) {
        Education education = getEducationById(id);
        education.setDegree(educationDetails.getDegree());
        education.setInstitution(educationDetails.getInstitution());
        education.setCountry(educationDetails.getCountry());
        education.setStartDate(educationDetails.getStartDate());
        education.setEndDate(educationDetails.getEndDate());
        education.setGrade(educationDetails.getGrade());
        education.setDescription(educationDetails.getDescription());
        return educationRepository.save(education);
    }

    @Override
    public void deleteEducation(Long id) {
        Education education = getEducationById(id);
        educationRepository.delete(education);
    }
} 