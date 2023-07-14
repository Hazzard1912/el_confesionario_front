import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';

interface Comentario {
  id: number;
  comentario: string;
  createdAt: Date;
  updatedAt: Date;
  confesionId: number;
}

interface Confesiones {
  id: number;
  titulo: string;
  descripcion: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Confesion {
  titulo: string;
  descripcion: string;
}

interface Respuesta {
  msg: string;
  fecha: Date;
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  postConfesion(confesion: Confesion): Observable<Respuesta> {
    const url = `${this.baseUrl}/confesion`;
    const body = confesion;

    return this.http.post<Respuesta>(url, body);
  }

  cargarConfesiones(): Observable<Confesiones[]> {
    const url = `${this.baseUrl}/confesion`;

    return this.http.get<Confesiones[]>(url);
  }

  darMeGusta(confesionId: number) {
    const url = `${this.baseUrl}/confesion-votos/${confesionId}`;
    this.http.put(url, null).subscribe(console.log);
  }

  comentarConfesion(comentario: string, id: number) {
    const url = `${this.baseUrl}/comentario/${id}`;
    this.http.post(url, { comentario }).subscribe(console.log);
  }

  cargarComentarios(id: number): Observable<Comentario[]> {
    const url = `${this.baseUrl}/comentario/${id}`;
    return this.http.get<Comentario[]>(url);
  }
}
