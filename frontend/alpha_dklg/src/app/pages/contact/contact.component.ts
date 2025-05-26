import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact.service';
import { ContactForm, ContactInfo } from '../../models/contact.model';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="contact-container">
      <h2>Contact</h2>
      
      @if (contactInfo) {
        <div class="contact-info-section">
          <h3>Mes Coordonnées</h3>
          <div class="info-grid">
            <div class="info-item">
              <i class="fas fa-envelope"></i>
              <p>{{ contactInfo.email }}</p>
            </div>
            @if (contactInfo.phone) {
              <div class="info-item">
                <i class="fas fa-phone"></i>
                <p>{{ contactInfo.phone }}</p>
              </div>
            }
            @if (contactInfo.address) {
              <div class="info-item">
                <i class="fas fa-map-marker-alt"></i>
                <p>{{ contactInfo.address }}</p>
              </div>
            }
            @if (contactInfo.availabilityHours) {
              <div class="info-item">
                <i class="fas fa-clock"></i>
                <p>{{ contactInfo.availabilityHours }}</p>
              </div>
            }
          </div>

          @if (contactInfo.socialLinks) {
            <div class="social-links">
              @if (contactInfo.socialLinks.linkedin) {
                <a [href]="contactInfo.socialLinks.linkedin" target="_blank" rel="noopener" class="social-icon">
                  <i class="fab fa-linkedin"></i>
                </a>
              }
              @if (contactInfo.socialLinks.github) {
                <a [href]="contactInfo.socialLinks.github" target="_blank" rel="noopener" class="social-icon">
                  <i class="fab fa-github"></i>
                </a>
              }
              @if (contactInfo.socialLinks.twitter) {
                <a [href]="contactInfo.socialLinks.twitter" target="_blank" rel="noopener" class="social-icon">
                  <i class="fab fa-twitter"></i>
                </a>
              }
            </div>
          }
        </div>
      }

      <div class="contact-form-section">
        <h3>Envoyez-moi un message</h3>
        @if (submitSuccess) {
          <div class="success-message">
            Votre message a été envoyé avec succès !
          </div>
        }
        @if (submitError) {
          <div class="error-message">
            Une erreur est survenue lors de l'envoi du message. Veuillez réessayer.
          </div>
        }
        <form (ngSubmit)="onSubmit()" #contactForm="ngForm">
          <div class="form-group">
            <label for="name">Nom</label>
            <input
              type="text"
              id="name"
              name="name"
              [(ngModel)]="formData.name"
              required
              #name="ngModel"
            >
            @if (name.invalid && (name.dirty || name.touched)) {
              <div class="error-text">Le nom est requis</div>
            }
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              [(ngModel)]="formData.email"
              required
              email
              #email="ngModel"
            >
            @if (email.invalid && (email.dirty || email.touched)) {
              <div class="error-text">Un email valide est requis</div>
            }
          </div>

          <div class="form-group">
            <label for="subject">Sujet</label>
            <input
              type="text"
              id="subject"
              name="subject"
              [(ngModel)]="formData.subject"
              required
              #subject="ngModel"
            >
            @if (subject.invalid && (subject.dirty || subject.touched)) {
              <div class="error-text">Le sujet est requis</div>
            }
          </div>

          <div class="form-group">
            <label for="message">Message</label>
            <textarea
              id="message"
              name="message"
              [(ngModel)]="formData.message"
              required
              rows="5"
              #message="ngModel"
            ></textarea>
            @if (message.invalid && (message.dirty || message.touched)) {
              <div class="error-text">Le message est requis</div>
            }
          </div>

          <button type="submit" [disabled]="!contactForm.form.valid || isSubmitting">
            @if (isSubmitting) {
              Envoi en cours...
            } @else {
              Envoyer
            }
          </button>
        </form>
      </div>
    </div>
  `,
  styles: [`
    .contact-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }

    h2 {
      color: #333;
      text-align: center;
      margin-bottom: 2rem;
    }

    h3 {
      color: #007bff;
      margin-bottom: 1.5rem;
    }

    .contact-info-section {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      margin-bottom: 2rem;
    }

    .info-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 1.5rem;
      margin-bottom: 1.5rem;
    }

    .info-item {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .info-item i {
      font-size: 1.5rem;
      color: #007bff;
    }

    .social-links {
      display: flex;
      gap: 1rem;
      margin-top: 1.5rem;
    }

    .social-icon {
      width: 40px;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #007bff;
      color: white;
      border-radius: 50%;
      text-decoration: none;
      transition: transform 0.3s ease, background-color 0.3s ease;
    }

    .social-icon:hover {
      transform: translateY(-3px);
      background: #0056b3;
    }

    .contact-form-section {
      background: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
      color: #444;
    }

    input,
    textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 1rem;
    }

    input:focus,
    textarea:focus {
      outline: none;
      border-color: #007bff;
    }

    .error-text {
      color: #dc3545;
      font-size: 0.875rem;
      margin-top: 0.25rem;
    }

    button {
      background: #007bff;
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      font-size: 1rem;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    button:hover:not(:disabled) {
      background: #0056b3;
    }

    button:disabled {
      background: #ccc;
      cursor: not-allowed;
    }

    .success-message {
      background: #d4edda;
      color: #155724;
      padding: 1rem;
      border-radius: 4px;
      margin-bottom: 1rem;
    }

    .error-message {
      background: #f8d7da;
      color: #721c24;
      padding: 1rem;
      border-radius: 4px;
      margin-bottom: 1rem;
    }

    @media (max-width: 768px) {
      .info-grid {
        grid-template-columns: 1fr;
      }

      .social-links {
        justify-content: center;
      }
    }
  `]
})
export class ContactComponent implements OnInit {
  contactInfo: ContactInfo | null = null;
  formData: ContactForm = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  isSubmitting = false;
  submitSuccess = false;
  submitError = false;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contactService.getContactInfo().subscribe({
      next: (data) => {
        this.contactInfo = data;
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des informations de contact:', error);
      }
    });
  }

  onSubmit() {
    if (this.isSubmitting) return;

    this.isSubmitting = true;
    this.submitSuccess = false;
    this.submitError = false;

    this.contactService.submitContactForm(this.formData).subscribe({
      next: () => {
        this.submitSuccess = true;
        this.isSubmitting = false;
        this.formData = {
          name: '',
          email: '',
          subject: '',
          message: ''
        };
      },
      error: (error) => {
        console.error('Erreur lors de l\'envoi du formulaire:', error);
        this.submitError = true;
        this.isSubmitting = false;
      }
    });
  }
}
