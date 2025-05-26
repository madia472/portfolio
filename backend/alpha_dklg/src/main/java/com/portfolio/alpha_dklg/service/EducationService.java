package com.portfolio.alpha_dklg.service;

import com.portfolio.alpha_dklg.model.Education;
import java.util.List;

public interface EducationService {
    Education saveEducation(Education education);
    Education getEducationById(Long id);
    List<Education> getAllEducations();
    Education updateEducation(Long id, Education education);
    void deleteEducation(Long id);
} 