import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header" [class.scrolled]="isScrolled">
      <nav class="nav-container">
        <div class="logo">
          <a href="#" class="logo-link" (click)="scrollToTop($event)">Alpha DKLG</a>
        </div>
        <ul class="nav-links">
          <li><a href="#about" (click)="scrollToSection($event, 'about')" [class.active]="activeSection === 'about'">À propos</a></li>
          <li><a href="#education" (click)="scrollToSection($event, 'education')" [class.active]="activeSection === 'education'">Formation</a></li>
          <li><a href="#experiences" (click)="scrollToSection($event, 'experiences')" [class.active]="activeSection === 'experiences'">Expériences</a></li>
          <li><a href="#projects" (click)="scrollToSection($event, 'projects')" [class.active]="activeSection === 'projects'">Projets</a></li>
          <li><a href="#skills" (click)="scrollToSection($event, 'skills')" [class.active]="activeSection === 'skills'">Compétences</a></li>
          <li><a href="#associations" (click)="scrollToSection($event, 'associations')" [class.active]="activeSection === 'associations'">Associations</a></li>
          <li><a href="#interests" (click)="scrollToSection($event, 'interests')" [class.active]="activeSection === 'interests'">Centres d'intérêt</a></li>
          <li><a href="#languages" (click)="scrollToSection($event, 'languages')" [class.active]="activeSection === 'languages'">Langues</a></li>
          <li><a href="#contact" (click)="scrollToSection($event, 'contact')" [class.active]="activeSection === 'contact'">Contact</a></li>
        </ul>
      </nav>
    </header>
  `,
  styles: [`
    .header {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      background: white;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
      z-index: 1000;
      transition: all 0.3s ease;
    }

    .header.scrolled {
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(5px);
    }

    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .logo-link {
      color: #333;
      text-decoration: none;
      font-size: 1.5rem;
      font-weight: bold;
    }

    .nav-links {
      display: flex;
      gap: 1.5rem;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .nav-links a {
      color: #666;
      text-decoration: none;
      font-weight: 500;
      transition: color 0.3s ease;
      padding: 0.5rem 0;
      position: relative;
    }

    .nav-links a:hover,
    .nav-links a.active {
      color: #007bff;
    }

    .nav-links a::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: #007bff;
      transform: scaleX(0);
      transition: transform 0.3s ease;
    }

    .nav-links a:hover::after,
    .nav-links a.active::after {
      transform: scaleX(1);
    }

    @media (max-width: 1024px) {
      .nav-links {
        gap: 1rem;
        font-size: 0.9rem;
      }
    }

    @media (max-width: 768px) {
      .nav-container {
        flex-direction: column;
        padding: 1rem;
      }

      .logo {
        margin-bottom: 1rem;
      }

      .nav-links {
        flex-wrap: wrap;
        justify-content: center;
        text-align: center;
      }
    }
  `]
})
export class HeaderComponent {
  isScrolled = false;
  activeSection = '';

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 0;
    this.updateActiveSection();
  }

  scrollToTop(event: Event) {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  scrollToSection(event: Event, sectionId: string) {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 80; // Hauteur de la navbar
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }

  private updateActiveSection() {
    const sections = document.querySelectorAll('section[id]');
    const scrollPosition = window.scrollY + 100;

    sections.forEach(section => {
      const htmlSection = section as HTMLElement;
      const sectionTop = htmlSection.offsetTop;
      const sectionHeight = htmlSection.clientHeight;
      const sectionId = htmlSection.getAttribute('id') || '';

      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        this.activeSection = sectionId;
      }
    });
  }
} 