package com.portfolio.alpha_dklg.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "interests")
public class Interest {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    
    @Column(columnDefinition = "TEXT")
    private String description;
} 