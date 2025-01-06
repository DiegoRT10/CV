import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { PanelModule } from 'primeng/panel';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    PanelModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
