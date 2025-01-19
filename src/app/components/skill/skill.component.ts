import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PanelModule } from 'primeng/panel';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';


@Component({
  selector: 'app-skill',
  imports: [
    PanelModule,
    AvatarModule,
    ButtonModule,
    MenuModule,
    CommonModule
  ],
  templateUrl: './skill.component.html',
  styleUrl: './skill.component.scss'
})
export class SkillComponent implements OnInit{
  habilidades: string[] = [
    '> Análisis de sistemas',
    '> Desarrollo de aplicaciones multiplataforma',
    '> Desarrollo de Apps Web',
    '> Desarrollo de Apps Nativas',
    '> Integración y despliegue continuo',
  ];
  terminalLines: string[] = [];
  currentLine: string = '';
  currentIndex: number = 0;
  typingSpeed: number = 100; // Velocidad de escritura (ms)
  lineDelay: number = 500; // Retardo entre líneas (ms)

  ngOnInit(): void {
    this.typeLine();
  }

  typeLine(): void {
    if (this.currentIndex < this.habilidades.length) {
      const currentHabilidad = this.habilidades[this.currentIndex];
      let charIndex = 0;

      const typeInterval = setInterval(() => {
        this.currentLine += currentHabilidad[charIndex];
        charIndex++;

        if (charIndex === currentHabilidad.length) {
          clearInterval(typeInterval);

          // Agregar la línea completa al array de terminalLines y pasar a la siguiente
          this.terminalLines.push(this.currentLine);
          this.currentLine = '';
          this.currentIndex++;

          setTimeout(() => this.typeLine(), this.lineDelay);
        }
      }, this.typingSpeed);
    }else{
        this.currentIndex = 0;
        this.terminalLines = [];
        setTimeout(() => this.typeLine(), this.lineDelay);
    }
    
  }

}
