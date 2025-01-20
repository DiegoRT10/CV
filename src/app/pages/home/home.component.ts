import { AfterViewChecked, Component, ElementRef, ViewChild } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { PanelModule } from 'primeng/panel';
import { ExperienceComponent } from "../../components/experience/experience.component";
import { EducationComponent } from "../../components/education/education.component";
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { ContactComponent } from "../../components/contact/contact.component";
import { SkillComponent } from "../../components/skill/skill.component";
import { KnowledgeComponent } from "../../components/knowledge/knowledge.component";


@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    PanelModule,
    ExperienceComponent,
    EducationComponent,
    AnimateOnScrollModule,
    ContactComponent,
    SkillComponent,
    KnowledgeComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements AfterViewChecked{
  viewComplet: boolean = false;
  @ViewChild('experienceSection', { read: ElementRef }) experienceSection!: ElementRef;
  private isFocused = false;

  focusExperience() {
    this.viewComplet = true;
    this.isFocused = false; // Reinicia el flag para permitir el scroll
  }

  ngAfterViewChecked() {
    // Verifica si el elemento está disponible y realiza el scroll
    if (this.viewComplet && !this.isFocused && this.experienceSection) {
      this.isFocused = true; // Evita múltiples intentos de scroll
      this.experienceSection.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else if (!this.experienceSection) {
      console.warn('experienceSection aún no está disponible.');
    }
  }
}
