package com.portfolio.alpha_dklg.service;

import com.portfolio.alpha_dklg.model.Interest;
import java.util.List;

public interface InterestService {
    Interest saveInterest(Interest interest);
    Interest getInterestById(Long id);
    List<Interest> getAllInterests();
    Interest updateInterest(Long id, Interest interest);
    void deleteInterest(Long id);
} 