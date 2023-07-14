import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from 'src/app/api.service';

interface Comentario {
  id: number;
  comentario: string;
  createdAt: Date;
  updatedAt: Date;
  confesionId: number;
}

@Component({
  selector: 'app-comentarios',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css'],
})
export class ComentariosComponent implements OnInit {
  comentarios: Comentario[] = [];

  ngOnInit(): void {
    this.apiService.cargarComentarios(this.id).subscribe((comentarios) => {
      this.comentarios = comentarios;
    });
  }

  constructor(private apiService: ApiService) {}

  @Input() id!: number;
}
