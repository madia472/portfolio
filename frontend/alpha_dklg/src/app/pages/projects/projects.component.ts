import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService } from '../../services/project.service';
import { Project } from '../../models/project.model';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="projects-container">
      <h2>Projets</h2>

      @if (isLoading) {
        <div class="loading-state">
          <div class="spinner"></div>
          <p>Chargement des projets...</p>
        </div>
      } @else if (error) {
        <div class="message-state">
          <i class="fas fa-info-circle"></i>
          <p>{{ error }}</p>
        </div>
      } @else if (projectsList.length === 0) {
        <div class="message-state">
          <i class="fas fa-laptop-code"></i>
          <p>Les projets seront bientôt disponibles !</p>
        </div>
      } @else {
        <div class="projects-grid">
          @for (project of projectsList; track project.id) {
            <div class="project-card">
              <div class="project-content">
                <div class="project-header">
                  <h3>{{ project.title }}</h3>
                  @if (project.inProduction) {
                    <span class="production-badge">En production</span>
                  }
                </div>
                <p class="description">{{ project.description }}</p>
                @if (project.technologies) {
                  <div class="technologies">
                    @for (tech of getTechnologiesArray(project.technologies); track tech) {
                      <span class="tech-tag">{{ tech }}</span>
                    }
                  </div>
                }
                @if (project.grade) {
                  <div class="grade">
                    <span class="grade-label">Note :</span>
                    <span class="grade-value">{{ project.grade }}</span>
                  </div>
                }
                <div class="project-links">
                  @if (project.link) {
                    <a [href]="project.link" target="_blank" rel="noopener" class="link-button">
                      <i class="fas fa-external-link-alt"></i> Voir le projet
                    </a>
                  }
                </div>
              </div>
            </div>
          }
        </div>
      }
    </div>
  `,
  styles: [`
    .projects-container {
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

    .projects-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
      gap: 2rem;
    }

    .project-card {
      background: white;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      transition: transform 0.3s ease;
    }

    .project-card:hover {
      transform: translateY(-5px);
    }

    .project-content {
      padding: 1.5rem;
    }

    .project-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      margin-bottom: 1rem;
    }

    h3 {
      color: #007bff;
      margin: 0;
      flex: 1;
    }

    .production-badge {
      background: #28a745;
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 15px;
      font-size: 0.75rem;
      font-weight: 500;
    }

    .description {
      color: #555;
      line-height: 1.6;
      margin: 1rem 0;
    }

    .technologies {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin: 1rem 0;
    }

    .tech-tag {
      background: #e9ecef;
      color: #495057;
      padding: 0.25rem 0.75rem;
      border-radius: 15px;
      font-size: 0.85rem;
    }

    .grade {
      margin: 1rem 0;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .grade-label {
      color: #666;
      font-weight: 500;
    }

    .grade-value {
      background: #007bff;
      color: white;
      padding: 0.25rem 0.75rem;
      border-radius: 15px;
      font-size: 0.85rem;
      font-weight: 500;
    }

    .project-links {
      display: flex;
      gap: 1rem;
      margin-top: 1rem;
    }

    .link-button {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.5rem 1rem;
      background: #007bff;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      font-size: 0.9rem;
      transition: background-color 0.3s ease;
    }

    .link-button:hover {
      background: #0056b3;
    }

    @media (max-width: 768px) {
      .projects-grid {
        grid-template-columns: 1fr;
      }
      
      .project-header {
        flex-direction: column;
        gap: 0.5rem;
      }
    }
  `]
})
export class ProjectsComponent implements OnInit {
  projectsList: Project[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private projectService: ProjectService) {}

  ngOnInit() {
    this.loadProjects();
  }

  loadProjects() {
    this.isLoading = true;
    this.error = null;
    
    this.projectService.getAllProjects().subscribe({
      next: (data) => {
        this.projectsList = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des projets:', error);
        this.error = 'Les projets ne sont pas encore disponibles. Revenez bientôt !';
        this.isLoading = false;
      }
    });
  }

  getTechnologiesArray(technologies: string): string[] {
    if (!technologies) return [];
    return technologies.split(',').map(tech => tech.trim());
  }
}
