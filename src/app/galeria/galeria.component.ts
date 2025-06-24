import { Component, EventEmitter, Input, Output, OnInit, HostListener, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent implements OnInit, OnDestroy {
  @Input() imagenes: string[] = [];
  @Output() cerrar = new EventEmitter<void>();

  imagenActualIndex: number = 0;

  ngOnInit() {
      if (this.imagenes.length === 0) {
        console.warn('No hay imágenes en la galería');
      }
  }

  ngOnDestroy() {}

  cerrarGaleria() {
    this.cerrar.emit();
  }

  siguiente() {
    if (this.imagenActualIndex < this.imagenes.length -1) {
      this.imagenActualIndex++;
    }
  }

  anterior() {
    if (this.imagenActualIndex > 0){
      this.imagenActualIndex--;
    }
  }

  seleccionarImagen(index: number) {
    this.imagenActualIndex = index;
  }

  @HostListener('window:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === 'ArrowRight') {
      this.siguiente();
      event.preventDefault();
    } else if (event.key === 'ArrowLeft') {
      this.anterior();
      event.preventDefault();
    } else if (event.key === 'Escape') {
      this.cerrarGaleria();
      event.preventDefault();
    }
  }
}
