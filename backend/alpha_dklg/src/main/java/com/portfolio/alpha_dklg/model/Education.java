package com.portfolio.alpha_dklg.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDate;

@Entity
@Data
@Table(name = "educations")
public class Education {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String degree;
    private String institution;
    private String country;
    private LocalDate startDate;
    private LocalDate endDate;
    private String grade;
    
    @Column(columnDefinition = "TEXT")
    private String description;
} 