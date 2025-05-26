package com.portfolio.alpha_dklg.controller;

import com.portfolio.alpha_dklg.model.Interest;
import com.portfolio.alpha_dklg.service.InterestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/interests")
@CrossOrigin(origins = "*")
public class InterestController {

    @Autowired
    private InterestService interestService;

    @GetMapping
    public List<Interest> getAllInterests() {
        return interestService.getAllInterests();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Interest> getInterestById(@PathVariable Long id) {
        try {
            Interest interest = interestService.getInterestById(id);
            return ResponseEntity.ok(interest);
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public Interest createInterest(@RequestBody Interest interest) {
        return interestService.saveInterest(interest);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Interest> updateInterest(@PathVariable Long id, @RequestBody Interest interest) {
        try {
            return ResponseEntity.ok(interestService.updateInterest(id, interest));
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteInterest(@PathVariable Long id) {
        try {
            interestService.deleteInterest(id);
            return ResponseEntity.noContent().build();
        } catch (Exception e) {
            return ResponseEntity.notFound().build();
        }
    }
} 