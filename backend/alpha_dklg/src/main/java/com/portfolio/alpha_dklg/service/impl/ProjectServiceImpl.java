package com.portfolio.alpha_dklg.service.impl;

import com.portfolio.alpha_dklg.model.Project;
import com.portfolio.alpha_dklg.repository.ProjectRepository;
import com.portfolio.alpha_dklg.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import jakarta.persistence.EntityNotFoundException;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class ProjectServiceImpl implements ProjectService {

    @Autowired
    private ProjectRepository projectRepository;

    @Override
    public Project saveProject(Project project) {
        return projectRepository.save(project);
    }

    @Override
    public Project getProjectById(Long id) {
        return projectRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Project not found with id: " + id));
    }

    @Override
    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    @Override
    public Project updateProject(Long id, Project projectDetails) {
        Project project = getProjectById(id);
        project.setTitle(projectDetails.getTitle());
        project.setDescription(projectDetails.getDescription());
        project.setTechnologies(projectDetails.getTechnologies());
        project.setLink(projectDetails.getLink());
        project.setGrade(projectDetails.getGrade());
        project.setInProduction(projectDetails.getInProduction());
        return projectRepository.save(project);
    }

    @Override
    public void deleteProject(Long id) {
        Project project = getProjectById(id);
        projectRepository.delete(project);
    }

    @Override
    public List<Project> getProjectsByTechnology(String technology) {
        return projectRepository.findAll().stream()
                .filter(project -> project.getTechnologies() != null &&
                        project.getTechnologies().toLowerCase().contains(technology.toLowerCase()))
                .collect(Collectors.toList());
    }

    @Override
    public List<Project> getProjectsByGrade(String grade) {
        return projectRepository.findAll().stream()
                .filter(project -> project.getGrade() != null &&
                        project.getGrade().equalsIgnoreCase(grade))
                .collect(Collectors.toList());
    }
} 