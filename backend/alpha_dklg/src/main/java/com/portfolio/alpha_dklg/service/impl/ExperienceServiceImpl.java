package com.portfolio.alpha_dklg.service.impl;

import com.portfolio.alpha_dklg.model.Experience;
import com.portfolio.alpha_dklg.repository.ExperienceRepository;
import com.portfolio.alpha_dklg.service.ExperienceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import jakarta.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class ExperienceServiceImpl implements ExperienceService {

    @Autowired
    private ExperienceRepository experienceRepository;

    @Override
    public Experience saveExperience(Experience experience) {
        return experienceRepository.save(experience);
    }

    @Override
    public Experience getExperienceById(Long id) {
        return experienceRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Experience not found with id: " + id));
    }

    @Override
    public List<Experience> getAllExperiences() {
        return experienceRepository.findAll();
    }

    @Override
    public Experience updateExperience(Long id, Experience experienceDetails) {
        Experience experience = getExperienceById(id);
        experience.setTitle(experienceDetails.getTitle());
        experience.setCompany(experienceDetails.getCompany());
        experience.setLocation(experienceDetails.getLocation());
        experience.setStartDate(experienceDetails.getStartDate());
        experience.setEndDate(experienceDetails.getEndDate());
        experience.setDescription(experienceDetails.getDescription());
        experience.setType(experienceDetails.getType());
        return experienceRepository.save(experience);
    }

    @Override
    public void deleteExperience(Long id) {
        Experience experience = getExperienceById(id);
        experienceRepository.delete(experience);
    }
} 