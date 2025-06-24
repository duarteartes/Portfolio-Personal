import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Trabajo {
  id: number;
  titulo: string;
  descripcion: string;
  imagenPrincipal: string;
  galeria: string[];
  categoria: string;
}

@Injectable({
  providedIn: 'root'
})
export class TrabajosService {

  private apiUrl = 'http://localhost:3000/trabajos'; // Asegúrate de que coincide con tu backend

  constructor(private http: HttpClient) {}

  getTrabajos(): Observable<Trabajo[]> {
    return this.http.get<Trabajo[]>(this.apiUrl);
  }
}
