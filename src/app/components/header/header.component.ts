import { Component, EventEmitter, Output} from '@angular/core';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-header',
  imports: [
    ButtonModule,
],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() viewComplet = new EventEmitter<void>();
  focusExperience(){
    this.viewComplet.emit()
  }
}
