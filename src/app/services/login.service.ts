import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LoginService {

  private apiUrl = 'http://localhost:3000/api/auth';

  constructor(private http: HttpClient) {}

  login(usuario: string, contrasena: string): Observable<any> {
    return new Observable(observer => {
      this.http.post(`${this.apiUrl}/login`, { usuario, contrasena }).subscribe({
        next: (response: any) => {
          localStorage.setItem('token', response.token);
          observer.next(response);
        },
        error: (err) => observer.error(err)
      });
    });
  }
  logout(): void {
    localStorage.removeItem('token');
  }
}
