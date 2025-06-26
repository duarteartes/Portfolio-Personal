import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  form!: FormGroup;
  error = '';

  constructor(private fb: FormBuilder, private loginService: LoginService, private router: Router) {}

  ngOnInit() {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      contrasena: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const {usuario, contrasena} = this.form.value;
      this.loginService.login(usuario!, contrasena!).subscribe({
        next: () => this.router.navigate(['/admin']),
        error: (err) => this.error = err. error?.error || 'Error desconocido'
      });
    }
  }
}