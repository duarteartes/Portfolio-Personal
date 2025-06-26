import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { TrabajosService } from '../services/trabajos.service';

@Component({
  selector: 'app-formulario-nuevo',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './formulario-nuevo.component.html',
  styleUrl: './formulario-nuevo.component.css'
})
export class FormularioNuevoComponent implements OnInit {
  form!: FormGroup;
  expandido = false;

  constructor(private fb: FormBuilder, private trabajosService: TrabajosService, private router: Router){}

  ngOnInit() {
    console.log('FormularioNuevoComponent iniciado');
    this.form = this.fb.group({
      titulo: ['', Validators.required],
      categoria: ['', Validators.required],
      descripcion: ['', Validators.required],
      imagenPrincipal: ['', Validators.required],
      galeria: ['', Validators.required]
    });
  }

  toggleExpand() {
    this.expandido = !this.expandido;
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      alert('Por favor, completa todos los campos obligatorios');
      return;
    }

    const formValue = this.form.value;
    const nuevoTrabajo = {
      titulo: formValue.titulo,
      categoria: formValue.categoria,
      descripcion: formValue.descripcion,
      imagenPrincipal: formValue.imagenPrincipal,
      galeria: formValue.galeria.split(',').map((img: string) => img.trim())
    };

    this.trabajosService.crearTrabajo(nuevoTrabajo).subscribe({
      next: () => {
        alert('Proyecto creado correctamente');
        this.router.navigate(['/portfolio']);
      },
      error: (err) => {
        console.error(err);
        alert('Error al crear el proyecto');
      }
    });
  }
}
