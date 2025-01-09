import { AfterViewChecked, Component, ElementRef, ViewChild } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ExperienceComponent } from '../experience/experience.component';
@Component({
  selector: 'app-header',
  imports: [
    ButtonModule,
    ExperienceComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewChecked {
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
