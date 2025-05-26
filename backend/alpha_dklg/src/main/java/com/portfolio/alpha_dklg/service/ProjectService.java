package com.portfolio.alpha_dklg.service;

import com.portfolio.alpha_dklg.model.Project;
import java.util.List;

public interface ProjectService {
    Project saveProject(Project project);
    Project getProjectById(Long id);
    List<Project> getAllProjects();
    Project updateProject(Long id, Project project);
    void deleteProject(Long id);
    
    // Additional filtering methods
    List<Project> getProjectsByTechnology(String technology);
    List<Project> getProjectsByGrade(String grade);
} 