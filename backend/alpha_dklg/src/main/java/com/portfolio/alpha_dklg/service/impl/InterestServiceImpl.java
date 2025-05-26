package com.portfolio.alpha_dklg.service.impl;

import com.portfolio.alpha_dklg.model.Interest;
import com.portfolio.alpha_dklg.repository.InterestRepository;
import com.portfolio.alpha_dklg.service.InterestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import jakarta.persistence.EntityNotFoundException;
import java.util.List;

@Service
public class InterestServiceImpl implements InterestService {

    @Autowired
    private InterestRepository interestRepository;

    @Override
    public Interest saveInterest(Interest interest) {
        return interestRepository.save(interest);
    }

    @Override
    public Interest getInterestById(Long id) {
        return interestRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Interest not found with id: " + id));
    }

    @Override
    public List<Interest> getAllInterests() {
        return interestRepository.findAll();
    }

    @Override
    public Interest updateInterest(Long id, Interest interestDetails) {
        Interest interest = getInterestById(id);
        interest.setTitle(interestDetails.getTitle());
        interest.setDescription(interestDetails.getDescription());
        return interestRepository.save(interest);
    }

    @Override
    public void deleteInterest(Long id) {
        Interest interest = getInterestById(id);
        interestRepository.delete(interest);
    }
} 