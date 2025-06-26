import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.component.html',
  styleUrl: './contacto.component.css'
})
export class ContactoComponent {
  formData = {
    nombre: '',
    telefono: '',
    email: '',
    mensaje: ''
  };

  mensajeEnviado = false;
  errors = {
    nombre: false,
    telefono: false,
    email: false,
    mensaje: false
  };

  onSubmit(event: Event) {
    event.preventDefault();

    // Validar campos
    this.errors = {
      nombre: !this.formData.nombre.trim(),
      telefono: !this.formData.telefono.trim(),
      email: !this.formData.email.trim(),
      mensaje: !this.formData.mensaje.trim()
    };

    const hayErrores = Object.values(this.errors).some(error => error);
    if (hayErrores) return;

    // Enviar al backend
    fetch('http://localhost:3000/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.formData)
    })
    .then(response => {
      if (response.ok) {
        this.mensajeEnviado = true;
        this.formData = { nombre: '', telefono: '', email: '', mensaje: '' };
      } else {
        alert('Error al enviar el mensaje.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('Error al enviar el mensaje.');
    });
  }
}