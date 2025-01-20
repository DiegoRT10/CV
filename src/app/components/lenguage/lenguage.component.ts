import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { ProgressBarModule } from 'primeng/progressbar';

@Component({
  selector: 'app-lenguage',
  imports: [
    ButtonModule,
    ProgressBarModule
  ],
  templateUrl: './lenguage.component.html',
  styleUrl: './lenguage.component.scss'
})
export class LenguageComponent {

}
