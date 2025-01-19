import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChipModule } from 'primeng/chip';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-contact',
  imports: [
    CommonModule,
    ChipModule,
    ButtonModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  correo:string = "alexisdieram@gmail.com";
  numero:string = "+502 33016167";
  direccion:string = `CASA 4-67, ZONA 0,
                      BARRIO LA IGLESIA,
                      OLOPA, CHIQUIMULA` 
  country:string = 'Olopa'

  isExpandedEmail: boolean = false;
  isExpandedNumber: boolean = false;
  isExpandedAddress: boolean = false;

  toggleExpandEmail(): void {
    this.isExpandedEmail = !this.isExpandedEmail;
  }
  toggleExpandNumber(): void {
    this.isExpandedNumber = !this.isExpandedNumber;
  }
  toggleExpandAddress(): void {
    this.isExpandedAddress = !this.isExpandedAddress;
  }
}
