package com.portfolio.alpha_dklg.service;

import com.portfolio.alpha_dklg.model.Experience;
import java.util.List;

public interface ExperienceService {
    Experience saveExperience(Experience experience);
    Experience getExperienceById(Long id);
    List<Experience> getAllExperiences();
    Experience updateExperience(Long id, Experience experience);
    void deleteExperience(Long id);
} 