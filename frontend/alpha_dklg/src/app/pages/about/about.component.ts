import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutService } from '../../services/about.service';
import { About } from '../../models/about.model';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="about-container">
      @if (isLoading) {
        <div class="loading-state">
          <div class="spinner"></div>
          <p>Chargement des informations...</p>
        </div>
      } @else if (error) {
        <div class="error-state">
          <i class="fas fa-exclamation-circle"></i>
          <h3>Une erreur est survenue</h3>
          <p>{{ error }}</p>
          <button (click)="retryLoading()" class="retry-button">
            <i class="fas fa-redo"></i> Réessayer
          </button>
        </div>
      } @else if (aboutData) {
        <div class="profile-section">
          @if (aboutData.profilePicture) {
            <div class="profile-picture">
              <img [src]="'/assets/images/profile/photo-profil.jpg'" [alt]="aboutData.fullName">
            </div>
          }
          <div class="profile-info">
            <h1>{{ aboutData.fullName }}</h1>
            <h2>{{ aboutData.title }}</h2>
            <p class="location">
              <i class="fas fa-map-marker-alt"></i> {{ aboutData.location }}
            </p>
          </div>
        </div>

        <div class="introduction">
          <p>{{ aboutData.introduction }}</p>
        </div>

        <div class="contact-section">
          <h3>Contact</h3>
          <div class="contact-info">
            <p>
              <i class="fas fa-envelope"></i>
              <a [href]="'mailto:' + aboutData.email">{{ aboutData.email }}</a>
            </p>
          </div>
        </div>

        @if (aboutData.resume) {
          <div class="resume-section">
            <a [href]="aboutData.resume" target="_blank" class="download-resume">
              <i class="fas fa-download"></i> Télécharger mon CV
            </a>
          </div>
        }
      }
    </div>
  `,
  styles: [`
    .about-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
    }

    .loading-state,
    .error-state {
      text-align: center;
      padding: 3rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .loading-state p {
      color: #666;
      margin-top: 1rem;
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

    .error-state {
      color: #721c24;
    }

    .error-state i {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .error-state h3 {
      margin-bottom: 0.5rem;
      color: #721c24;
    }

    .retry-button {
      margin-top: 1rem;
      padding: 0.5rem 1rem;
      background: #007bff;
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .retry-button:hover {
      background: #0056b3;
    }

    .profile-section {
      display: flex;
      align-items: center;
      gap: 2rem;
      margin-bottom: 2rem;
    }

    .profile-picture {
      width: 200px;
      height: 200px;
      border-radius: 50%;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .profile-picture img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .profile-info {
      flex: 1;
    }

    h1 {
      color: #333;
      margin-bottom: 0.5rem;
      font-size: 2.5rem;
    }

    h2 {
      color: #007bff;
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }

    .location {
      color: #666;
      font-size: 1rem;
    }

    .introduction {
      margin: 2rem 0;
      color: #555;
      line-height: 1.6;
      font-size: 1.1rem;
    }

    h3 {
      color: #333;
      margin-bottom: 1rem;
      font-size: 1.3rem;
    }

    .contact-section {
      margin: 2rem 0;
      padding: 1.5rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

    .contact-info p {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: #555;
    }

    .contact-info a {
      color: #007bff;
      text-decoration: none;
    }

    .contact-info a:hover {
      text-decoration: underline;
    }

    .resume-section {
      margin-top: 2rem;
      text-align: center;
    }

    .download-resume {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 0.8rem 1.5rem;
      background: #007bff;
      color: white;
      text-decoration: none;
      border-radius: 4px;
      font-weight: 500;
      transition: background-color 0.3s ease;
    }

    .download-resume:hover {
      background: #0056b3;
    }

    @media (max-width: 768px) {
      .profile-section {
        flex-direction: column;
        text-align: center;
      }

      .profile-picture {
        margin: 0 auto;
      }
    }
  `]
})
export class AboutComponent implements OnInit {
  aboutData: About | null = null;
  isLoading = true;
  error: string | null = null;

  constructor(private aboutService: AboutService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.isLoading = true;
    this.error = null;
    
    this.aboutService.getAboutData().subscribe({
      next: (response) => {
        console.log('Response received:', response); // Pour le débogage
        if (response && response.about) {
          this.aboutData = response.about;
          this.isLoading = false;
        } else {
          console.error('Invalid response format:', response);
          this.error = 'Format de réponse invalide';
          this.isLoading = false;
        }
      },
      error: (error: Error) => {
        console.error('Erreur lors de la récupération des informations:', error);
        this.error = 'Impossible de charger les informations. Le serveur est peut-être indisponible.';
        this.isLoading = false;
      }
    });
  }

  retryLoading() {
    this.loadData();
  }
}
