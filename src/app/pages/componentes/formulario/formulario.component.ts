import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  formulario: FormGroup = this.fb.group({
    titulo: ['', [Validators.required]],
    descripcion: ['', [Validators.required]],
    etiqueta: [''],
  });

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private toastr: ToastrService
  ) {}

  onSubmit(): void {
    if (this.formulario.valid) {
      const titulo: string = this.formatText(
        this.formulario.get('titulo')?.value
      );

      const descripcion: string = this.formatText(
        this.formulario.get('descripcion')?.value
      );

      const etiqueta: string = this.formatText(
        this.formulario.get('etiqueta')?.value
      );

      const confesion = {
        titulo,
        descripcion,
      };

      this.apiService.postConfesion(confesion).subscribe((respuesta) => {
        this.showSuccess();
        this.formulario.reset();
      });

      if (etiqueta !== '') {
      }
    }
  }

  private formatText(texto: string): string {
    let textoFormateado = texto.toLowerCase();
    textoFormateado = textoFormateado.trim();
    return textoFormateado;
  }

  private showSuccess() {
    this.toastr.success('Confesion Publicada!', 'Exito', {
      easeTime: 500,
      timeOut: 2000,
    });
  }
}
