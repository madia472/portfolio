import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AssociationService } from '../../services/association.service';
import { Association } from '../../models/association.model';

@Component({
  selector: 'app-associations',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="associations-container">
      <h2>Associations</h2>
      <div class="associations-list">
        @for (association of associationsList; track association.id) {
          <div class="association-item">
            <h3>{{ association.name }}</h3>
            <p class="role">{{ association.role }}</p>
            <p class="period">{{ association.startDate }} - {{ association.endDate }}</p>
            <p class="description">{{ association.description }}</p>
            @if (association.achievements && association.achievements.length > 0) {
              <div class="achievements">
                <h4>Réalisations :</h4>
                <ul>
                  @for (achievement of association.achievements; track achievement) {
                    <li>{{ achievement }}</li>
                  }
                </ul>
              </div>
            }
          </div>
        }
      </div>
    </div>
  `,
  styles: [`
    .associations-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
    }

    h2 {
      color: #333;
      margin-bottom: 2rem;
      text-align: center;
    }

    .associations-list {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    .association-item {
      background: white;
      padding: 1.5rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    h3 {
      color: #007bff;
      margin-bottom: 0.5rem;
    }

    .role {
      font-weight: 500;
      color: #444;
    }

    .period {
      color: #666;
      font-size: 0.9rem;
      margin: 0.5rem 0;
    }

    .description {
      color: #555;
      line-height: 1.6;
      margin: 1rem 0;
    }

    .achievements {
      margin-top: 1rem;
    }

    h4 {
      color: #444;
      margin-bottom: 0.5rem;
      font-size: 1rem;
    }

    ul {
      list-style-type: disc;
      margin-left: 1.5rem;
      color: #555;
    }

    li {
      margin: 0.5rem 0;
    }
  `]
})
export class AssociationsComponent implements OnInit {
  associationsList: Association[] = [];

  constructor(private associationService: AssociationService) {}

  ngOnInit() {
    this.associationService.getAllAssociations().subscribe({
      next: (data) => {
        this.associationsList = data;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des associations:', error);
      }
    });
  }
}
