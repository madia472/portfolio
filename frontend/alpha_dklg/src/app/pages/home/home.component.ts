import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutComponent } from '../about/about.component';
import { EducationComponent } from '../education/education.component';
import { ExperiencesComponent } from '../experiences/experiences.component';
import { ProjectsComponent } from '../projects/projects.component';
import { SkillsComponent } from '../skills/skills.component';
import { AssociationsComponent } from '../associations/associations.component';
import { InterestsComponent } from '../interests/interests.component';
import { LanguagesComponent } from '../languages/languages.component';
import { ContactComponent } from '../contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    AboutComponent,
    EducationComponent,
    ExperiencesComponent,
    ProjectsComponent,
    SkillsComponent,
    AssociationsComponent,
    InterestsComponent,
    LanguagesComponent,
    ContactComponent
  ],
  template: `
    <div class="sections-container">
      <section id="about" class="section">
        <app-about></app-about>
      </section>

      <section id="education" class="section">
        <app-education></app-education>
      </section>

      <section id="experiences" class="section">
        <app-experiences></app-experiences>
      </section>

      <section id="projects" class="section">
        <app-projects></app-projects>
      </section>

      <section id="skills" class="section">
        <app-skills></app-skills>
      </section>

      <section id="associations" class="section">
        <app-associations></app-associations>
      </section>

      <section id="interests" class="section">
        <app-interests></app-interests>
      </section>

      <section id="languages" class="section">
        <app-languages></app-languages>
      </section>

      <section id="contact" class="section">
        <app-contact></app-contact>
      </section>
    </div>
  `,
  styles: [`
    .sections-container {
      scroll-behavior: smooth;
    }

    .section {
      min-height: 100vh;
      padding: 80px 0;
      scroll-margin-top: 80px; /* Pour tenir compte de la navbar fixe */
    }

    @media (max-width: 768px) {
      .section {
        scroll-margin-top: 120px;
      }
    }
  `]
})
export class HomeComponent {}
