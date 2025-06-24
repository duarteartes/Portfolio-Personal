import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

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

  private apiUrl = 'http://localhost:3000/api/trabajos'; // Asegúrate de que coincide con tu backend

  constructor(private http: HttpClient) {}

  getTrabajos(): Observable<Trabajo[]> {
    return this.http.get<Trabajo[]>(this.apiUrl);
  }

  getTrabajoPorId(id: number): Observable<Trabajo> {
    return this.http.get<Trabajo>(`${this.apiUrl}/${id}`).pipe(
      map(trabajo => ({
        ...trabajo,
        galeria: JSON.parse(trabajo.galeria as unknown as string)
      }))
    );
  }

}
