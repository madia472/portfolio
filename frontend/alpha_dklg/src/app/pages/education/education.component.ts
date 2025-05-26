import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationService } from '../../services/education.service';
import { Education } from '../../models/education.model';

@Component({
  selector: 'app-education',
  standalone: true,
  imports: [CommonModule],
  providers: [EducationService],
  template: `
    <div class="education-container">
      <h2>Formation</h2>

      @if (isLoading) {
        <div class="loading-state">
          <div class="spinner"></div>
          <p>Chargement des formations...</p>
        </div>
      } @else if (error) {
        <div class="message-state">
          <i class="fas fa-info-circle"></i>
          <p>{{ error }}</p>
        </div>
      } @else if (educationList.length === 0) {
        <div class="message-state">
          <i class="fas fa-graduation-cap"></i>
          <p>Les informations sur la formation seront bientôt disponibles !</p>
        </div>
      } @else {
        <div class="education-list">
          @for (education of educationList; track education.id) {
            <div class="education-item">
              <h3>{{ education.degree }}</h3>
              <p class="school">{{ education.institution }}</p>
              <p class="period">{{ education.startDate }} - {{ education.endDate }}</p>
              <p class="location">{{ education.country }}</p>
              @if (education.description) {
                <p class="description">{{ education.description }}</p>
              }
              @if (education.grade) {
                <p class="mention">Mention : {{ education.grade }}</p>
              }
            </div>
          }
        </div>
      }
    </div>
  `,
  styles: [`
    .education-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
    }

    h2 {
      color: #333;
      text-align: center;
      margin-bottom: 2rem;
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

    .education-list {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .education-item {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    h3 {
      color: #007bff;
      margin-bottom: 0.5rem;
    }

    .school {
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

    .mention {
      color: #28a745;
      font-weight: 500;
      margin-top: 0.5rem;
    }
  `]
})
export class EducationComponent implements OnInit {
  educationList: Education[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private educationService: EducationService) {}

  ngOnInit() {
    this.loadEducations();
  }

  loadEducations() {
    this.isLoading = true;
    this.error = null;
    
    this.educationService.getAllEducations().subscribe({
      next: (data: Education[]) => {
        this.educationList = data;
        this.isLoading = false;
      },
      error: (error: any) => {
        console.error('Erreur lors de la récupération des formations:', error);
        this.error = 'Les informations sur la formation ne sont pas encore disponibles. Revenez bientôt !';
        this.isLoading = false;
      }
    });
  }
} 