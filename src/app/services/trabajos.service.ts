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

  private apiUrl = 'http://localhost:3000/api/trabajos';

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

  crearTrabajo(data: {
    titulo: string;
    descripcion: string;
    imagenPrincipal: string;
    galeria: string[];
    categoria: string;
  }): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

  eliminarTrabajo(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

}
