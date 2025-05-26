import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillService } from '../../services/skill.service';
import { Skill } from '../../models/skill.model';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  providers: [SkillService],
  template: `
    <div class="skills-container">
      <h2>Compétences</h2>
      
      @if (isLoading) {
        <div class="loading-state">
          <div class="spinner"></div>
          <p>Chargement des compétences...</p>
        </div>
      } @else if (error) {
        <div class="message-state">
          <i class="fas fa-info-circle"></i>
          <p>{{ error }}</p>
        </div>
      } @else if (skillsList.length === 0) {
        <div class="message-state">
          <i class="fas fa-lightbulb"></i>
          <p>Les compétences seront bientôt disponibles !</p>
        </div>
      } @else {
        <div class="skills-grid">
          @for (skill of skillsList; track skill.id) {
            <div class="skill-card">
              <h3>{{ skill.name }}</h3>
              <div class="skill-level">
                <div class="progress-bar">
                  <div class="progress" [style.width]="skill.level + '%'"></div>
                </div>
                <span class="level-text">{{ skill.level }}%</span>
              </div>
              @if (skill.description) {
                <p class="description">{{ skill.description }}</p>
              }
            </div>
          }
        </div>
      }
    </div>
  `,
  styles: [`
    .skills-container {
      max-width: 1200px;
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

    .skills-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 2rem;
    }

    .skill-card {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    h3 {
      color: #333;
      margin-bottom: 1rem;
    }

    .skill-level {
      margin: 1rem 0;
    }

    .progress-bar {
      height: 8px;
      background: #e9ecef;
      border-radius: 4px;
      overflow: hidden;
      margin-bottom: 0.5rem;
    }

    .progress {
      height: 100%;
      background: #007bff;
      border-radius: 4px;
      transition: width 0.3s ease;
    }

    .level-text {
      color: #666;
      font-size: 0.9rem;
    }

    .description {
      color: #555;
      font-size: 0.95rem;
      line-height: 1.5;
      margin-top: 1rem;
    }

    @media (max-width: 768px) {
      .skills-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class SkillsComponent implements OnInit {
  skillsList: Skill[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private skillService: SkillService) {}

  ngOnInit() {
    this.loadSkills();
  }

  loadSkills() {
    this.isLoading = true;
    this.error = null;
    
    this.skillService.getAllSkills().subscribe({
      next: (data: Skill[]) => {
        this.skillsList = data;
        this.isLoading = false;
      },
      error: (error: any) => {
        console.error('Erreur lors de la récupération des compétences:', error);
        this.error = 'Les compétences ne sont pas encore disponibles. Revenez bientôt !';
        this.isLoading = false;
      }
    });
  }
} 