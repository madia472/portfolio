package com.portfolio.alpha_dklg.service.impl;

import com.portfolio.alpha_dklg.model.Language;
import com.portfolio.alpha_dklg.repository.LanguageRepository;
import com.portfolio.alpha_dklg.service.LanguageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import jakarta.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class LanguageServiceImpl implements LanguageService {

    @Autowired
    private LanguageRepository languageRepository;

    @Override
    public Language saveLanguage(Language language) {
        return languageRepository.save(language);
    }

    @Override
    public Language getLanguageById(Long id) {
        return languageRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Language not found with id: " + id));
    }

    @Override
    public List<Language> getAllLanguages() {
        return languageRepository.findAll();
    }

    @Override
    public Language updateLanguage(Long id, Language languageDetails) {
        Language language = getLanguageById(id);
        language.setName(languageDetails.getName());
        language.setLevel(languageDetails.getLevel());
        return languageRepository.save(language);
    }

    @Override
    public void deleteLanguage(Long id) {
        Language language = getLanguageById(id);
        languageRepository.delete(language);
    }
} 