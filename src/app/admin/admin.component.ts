import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioNuevoComponent } from '../formulario-nuevo/formulario-nuevo.component';
import { TrabajosService, Trabajo } from '../services/trabajos.service';
import { CardTrabajoComponent } from '../card-trabajo/card-trabajo.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule, FormularioNuevoComponent, CardTrabajoComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent implements OnInit{
  trabajos: Trabajo[] = [];

  constructor(private trabajosService: TrabajosService) {}

  ngOnInit(): void {
    this.cargarTrabajos();
  }

  cargarTrabajos(): void {
    this.trabajosService.getTrabajos().subscribe((data) => {
      this.trabajos = data;
    })
  }

  eliminarTrabajo(id: number): void {
    if (confirm('¿Estás seguro de eliminar el trabajo?')) {
      this.trabajosService.eliminarTrabajo(id).subscribe(() => {
        this.trabajos = this.trabajos.filter(t => t.id !== id);
      });
    }
  }
}
