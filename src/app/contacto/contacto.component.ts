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

    // Resetear errores
    this.errors = {
      nombre: !this.formData.nombre.trim(),
      telefono: !this.formData.telefono.trim(),
      email: !this.formData.email.trim(),
      mensaje: !this.formData.mensaje.trim()
    };

    // Si hay algún error, no enviar
    const hayErrores = Object.values(this.errors).some(error => error);
    if (hayErrores) return;

    // Enviar formulario
    const formDataToSend = new FormData();
    formDataToSend.append('nombre', this.formData.nombre);
    formDataToSend.append('telefono', this.formData.telefono);
    formDataToSend.append('email', this.formData.email);
    formDataToSend.append('mensaje', this.formData.mensaje);
    formDataToSend.append('_captcha', 'false');

    fetch('https://formsubmit.co/duarte.eartes@gmail.com', {
      method: 'POST',
      body: formDataToSend
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
