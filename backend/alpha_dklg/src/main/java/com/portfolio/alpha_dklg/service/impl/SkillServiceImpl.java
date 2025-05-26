package com.portfolio.alpha_dklg.service.impl;

import com.portfolio.alpha_dklg.model.Skill;
import com.portfolio.alpha_dklg.repository.SkillRepository;
import com.portfolio.alpha_dklg.service.SkillService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import jakarta.persistence.EntityNotFoundException;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class SkillServiceImpl implements SkillService {

    @Autowired
    private SkillRepository skillRepository;

    @Override
    public Skill saveSkill(Skill skill) {
        return skillRepository.save(skill);
    }

    @Override
    public Skill getSkillById(Long id) {
        return skillRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Skill not found with id: " + id));
    }

    @Override
    public List<Skill> getAllSkills() {
        return skillRepository.findAll();
    }

    @Override
    public Skill updateSkill(Long id, Skill skillDetails) {
        Skill skill = getSkillById(id);
        skill.setName(skillDetails.getName());
        skill.setCategory(skillDetails.getCategory());
        skill.setLevel(skillDetails.getLevel());
        return skillRepository.save(skill);
    }

    @Override
    public void deleteSkill(Long id) {
        Skill skill = getSkillById(id);
        skillRepository.delete(skill);
    }

    @Override
    public List<Skill> getSkillsByCategory(String category) {
        return skillRepository.findAll().stream()
                .filter(skill -> skill.getCategory() != null &&
                        skill.getCategory().equalsIgnoreCase(category))
                .collect(Collectors.toList());
    }
} 