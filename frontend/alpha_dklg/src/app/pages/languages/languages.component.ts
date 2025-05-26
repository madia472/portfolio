import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageService } from '../../services/language.service';
import { Language } from '../../models/language.model';

@Component({
  selector: 'app-languages',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="languages-container">
      <h2>Langues</h2>

      @if (isLoading) {
        <div class="loading-state">
          <div class="spinner"></div>
          <p>Chargement des langues...</p>
        </div>
      } @else if (error) {
        <div class="error-state">
          <i class="fas fa-exclamation-circle"></i>
          <p>{{ error }}</p>
          <button (click)="loadLanguages()" class="retry-button">
            <i class="fas fa-redo"></i> Réessayer
          </button>
        </div>
      } @else if (languagesList.length === 0) {
        <div class="empty-state">
          <i class="fas fa-language"></i>
          <p>Aucune langue n'est disponible pour le moment.</p>
        </div>
      } @else {
        <div class="languages-grid">
          @for (language of languagesList; track language.id) {
            <div class="language-card">
              <h3>{{ language.name }}</h3>
              <div class="level-badge">{{ language.level }}</div>
            </div>
          }
        </div>
      }
    </div>
  `,
  styles: [`
    .languages-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }

    h2 {
      color: #333;
      margin-bottom: 2rem;
      text-align: center;
    }

    .loading-state,
    .error-state,
    .empty-state {
      text-align: center;
      padding: 3rem;
      background: white;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      margin: 2rem 0;
    }

    .loading-state p,
    .error-state p,
    .empty-state p {
      color: #666;
      margin-top: 1rem;
      font-size: 1.1rem;
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

    .error-state i,
    .empty-state i {
      font-size: 2rem;
      color: #007bff;
      margin-bottom: 1rem;
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

    .languages-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 2rem;
    }

    .language-card {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      text-align: center;
      transition: transform 0.3s ease;
    }

    .language-card:hover {
      transform: translateY(-5px);
    }

    h3 {
      color: #007bff;
      margin-bottom: 1rem;
    }

    .level-badge {
      display: inline-block;
      background: #007bff;
      color: white;
      padding: 0.5rem 1rem;
      border-radius: 20px;
      font-weight: 500;
    }

    .certification {
      color: #666;
      font-size: 0.9rem;
      margin-bottom: 1rem;
      font-style: italic;
    }

    .description {
      color: #555;
      line-height: 1.6;
    }

    @media (max-width: 768px) {
      .languages-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class LanguagesComponent implements OnInit {
  languagesList: Language[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private languageService: LanguageService) {}

  ngOnInit() {
    this.loadLanguages();
  }

  loadLanguages() {
    this.isLoading = true;
    this.error = null;

    this.languageService.getAllLanguages().subscribe({
      next: (data) => {
        this.languagesList = data;
        this.isLoading = false;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des langues:', error);
        this.error = 'Impossible de charger les langues. Veuillez réessayer plus tard.';
        this.isLoading = false;
      }
    });
  }
}
