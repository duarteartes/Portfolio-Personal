import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Trabajo } from '../services/trabajos.service';
import { RouterModule } from '@angular/router';  // Importa RouterModule

@Component({
  selector: 'app-card-trabajo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './card-trabajo.component.html',
  styleUrl: './card-trabajo.component.css'
})
export class CardTrabajoComponent {
  @Input() trabajo!: Trabajo;
}