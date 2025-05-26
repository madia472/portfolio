package com.portfolio.alpha_dklg.service;

import com.portfolio.alpha_dklg.model.Skill;
import java.util.List;

public interface SkillService {
    Skill saveSkill(Skill skill);
    Skill getSkillById(Long id);
    List<Skill> getAllSkills();
    Skill updateSkill(Long id, Skill skill);
    void deleteSkill(Long id);
    
    // Filter by category
    List<Skill> getSkillsByCategory(String category);
} 