import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataViewModule } from 'primeng/dataview';
import { ButtonModule } from 'primeng/button';
import { ChipModule } from 'primeng/chip';



@Component({
  selector: 'app-knowledge',
  imports: [
    DataViewModule,
    CommonModule,
    ButtonModule,
    ChipModule
  ],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  items:string[] = [
    'Java',
    'SQL',
    'Kotlin',
    'NodeJs',
    'Angular',
    'Jenkins',
    'Ansible',
    'Docker',
    'Ubuntu',
    'UbuntuServer',
    'Nginx',
    'OpenLiteSpeed'
  ]

}
