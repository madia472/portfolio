package com.portfolio.alpha_dklg.service;

import com.portfolio.alpha_dklg.model.Language;
import java.util.List;

public interface LanguageService {
    Language saveLanguage(Language language);
    Language getLanguageById(Long id);
    List<Language> getAllLanguages();
    Language updateLanguage(Long id, Language language);
    void deleteLanguage(Long id);
} 