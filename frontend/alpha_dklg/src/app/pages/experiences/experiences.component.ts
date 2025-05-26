import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceService } from '../../services/experience.service';
import { Experience } from '../../models/experience.model';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="experiences-container">
      <h2>Expériences Professionnelles</h2>

      @if (isLoading) {
        <div class="loading-state">
          <div class="spinner"></div>
          <p>Chargement des expériences...</p>
        </div>
      } @else if (error) {
        <div class="message-state">
          <i class="fas fa-info-circle"></i>
          <p>{{ error }}</p>
        </div>
      } @else if (experiencesList.length === 0) {
        <div class="message-state">
          <i class="fas fa-briefcase"></i>
          <p>Les expériences professionnelles seront bientôt disponibles !</p>
        </div>
      } @else {
        <div class="experiences-list">
          @for (experience of experiencesList; track experience.id) {
            <div class="experience-item">
              <h3>{{ experience.title }}</h3>
              <p class="company">{{ experience.company }}</p>
              <p class="period">{{ experience.startDate }} - {{ experience.endDate }}</p>
              <p class="location">{{ experience.location }}</p>
              <p class="description">{{ experience.description }}</p>
              @if (experience.type) {
                <p class="type">{{ experience.type }}</p>
              }
            </div>
          }
        </div>
      }
    </div>
  `,
  styles: [`
    .experiences-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
    }

    h2 {
      color: #333;
      margin-bottom: 2rem;
      text-align: center;
    }

    .loading-state,
    .message-state {
      text-align: center;
      padding: 3rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      margin: 2rem 0;
    }

    .loading-state p,
    .message-state p {
      color: #666;
      margin-top: 1rem;
      font-size: 1.1rem;
    }

    .message-state i {
      font-size: 2rem;
      color: #007bff;
      margin-bottom: 1rem;
    }

    .spinner {
      width: 40px;
      height: 40px;
      border: 4px solid #f3f3f3;
      border-top: 4px solid #007bff;
      border-radius: 50%;
      margin: 0 auto;
      animation: spin 1s linear infinite;
    }

    @keyframes spin {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }

    .experiences-list {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .experience-item {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    h3 {
      color: #007bff;
      margin-bottom: 0.5rem;
    }

    .company {
      font-weight: 500;
      color: #444;
    }

    .period, .location {
      color: #666;
      font-size: 0.9rem;
      margin: 0.5rem 0;
    }

    .description {
      color: #555;
      line-height: 1.6;
      margin: 1rem 0;
    }

    .type {
      display: inline-block;
      background: #e9ecef;
      color: #495057;
      padding: 0.25rem 0.75rem;
      border-radius: 15px;
      font-size: 0.85rem;
      margin-top: 0.5rem;
    }
  `]
})
export class ExperiencesComponent implements OnInit {
  experiencesList: Experience[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private experienceService: ExperienceService) {}

  ngOnInit() {
    this.loadExperiences();
  }

  loadExperiences() {
    this.isLoading = true;
    this.error = null;
    
    this.experienceService.getAllExperiences().subscribe({
      next: (data) => {
        this.experiencesList = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des expériences:', error);
        this.error = 'Les expériences professionnelles ne sont pas encore disponibles. Revenez bientôt !';
        this.isLoading = false;
      }
    });
  }
}
