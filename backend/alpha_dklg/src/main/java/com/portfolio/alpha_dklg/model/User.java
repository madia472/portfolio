package com.portfolio.alpha_dklg.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String title;
    
    @Column(columnDefinition = "TEXT")
    private String bio;
    
    private String photoUrl;
    private String email;
    private String linkedin;
    private String github;
    private String cvUrl;
} 