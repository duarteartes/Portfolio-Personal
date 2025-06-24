import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTrabajoComponent } from '../card-trabajo/card-trabajo.component';
import { TrabajosService, Trabajo } from '../services/trabajos.service';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, CardTrabajoComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit {
  trabajos: Trabajo[] = [];
  trabajosGrafico: Trabajo[] = [];
  trabajosDaw: Trabajo[] = [];


  constructor(private trabajosService: TrabajosService) {}

  ngOnInit() {
    this.trabajosService.getTrabajos().subscribe((data) => {
      this.trabajos = data;
      this.trabajosGrafico = data.filter(trabajo => trabajo.categoria === 'grafico');
      this.trabajosDaw = data.filter(trabajo => trabajo.categoria === 'daw');
    });
  }
}