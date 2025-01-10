import { Component } from '@angular/core';
import { Timeline } from 'primeng/timeline';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';


interface Experience {
  Puesto: string;
  Institucion: string;
  Tiempo: string
  Descripcion: string;
  Referencia: string;
}


@Component({
  selector: 'app-experience',
  imports: [
    Timeline,
    CardModule,
    ButtonModule
  ],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.scss',
  
})
export class ExperienceComponent {
  dataExperience: Experience[] = [];

  constructor() {
      this.dataExperience = [
          {
            Puesto: 'Analista de sistemas',
            Institucion: 'Corporación SALOM S.A',
            Tiempo: 'Junio 2022 - Noviembre 2023',
            Descripcion: `He desarrollado sistemas de facturación,
control de cheques, control de pedidos a
bodega, sistema de evaluación, app de
seguimiento de rutas. Migración de sistema de
control de ventas de php a Angular y NodeJs`,
            Referencia: 'infofarmacia1@gmail.com'},
          {
            Puesto: 'Developer Frontend',
            Institucion: 'CUNORI',
            Tiempo: 'Enero 2024 - Noviembre 2024',
            Descripcion: `Se trabajo en un proyecto para controlar la
carga académica del Centro Universitario de
Oriente CUNORI`,
            Referencia: 'hendrick.calderon@cunori.edu.gt'
          },
          {
            Puesto: 'Auxiliar de investigación',
            Institucion: 'DIGI-USAC',
            Tiempo: 'Julio 2024 - Diciembre 2024',
            Descripcion: `Ayuda parcial en el diseño de los módulos de
unidades y equipos de investigación para el
Sistema de Gestión de la Investigación de la
USAC (Sigi)`,
            Referencia: 'spinto@cunori.edu.gt'
          }
          
      ];
  }
}
