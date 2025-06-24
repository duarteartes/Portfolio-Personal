import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TrabajosService, Trabajo } from '../services/trabajos.service';
import { CommonModule } from '@angular/common';
import { SafeHtmlPipe } from '../pipes/safe-html.pipe';
import { GaleriaComponent } from '../galeria/galeria.component';


@Component({
  selector: 'app-detalles',
  standalone: true,
  imports: [CommonModule, SafeHtmlPipe, GaleriaComponent],
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  trabajo!: Trabajo | null;
  galeriaVisible = false;

  constructor(
    private route: ActivatedRoute,
    private trabajosService: TrabajosService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.trabajosService.getTrabajoPorId(id).subscribe({
        next: (data) => this.trabajo = data,
        error: () => this.trabajo = null
      });
    }
  }

  mostrarGaleria() {
    this.galeriaVisible = true;
  }

  ocultarGaleria() {
    this.galeriaVisible = false;
  }
}