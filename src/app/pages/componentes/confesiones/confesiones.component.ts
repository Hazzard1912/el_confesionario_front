import { Component, OnInit, TemplateRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from 'src/app/api.service';
import { BsModalService, BsModalRef, ModalModule } from 'ngx-bootstrap/modal';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ComentariosComponent } from '../comentarios/comentarios.component';

interface Confesiones {
  id: number;
  titulo: string;
  descripcion: string;
  createdAt: Date;
  updatedAt: Date;
}

@Component({
  selector: 'app-confesiones',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ComentariosComponent],
  providers: [BsModalService],
  templateUrl: './confesiones.component.html',
  styleUrls: ['./confesiones.component.css'],
})
export class ConfesionesComponent implements OnInit {
  confesiones: Confesiones[] = [];

  modalRef?: BsModalRef;

  formulario: FormGroup = this.fb.group({
    motivo: ['', [Validators.required, Validators.minLength(8)]],
  });

  comentarFormulario: FormGroup = this.fb.group({
    comentario: ['', [Validators.required, Validators.minLength(4)]],
  });

  constructor(
    private apiService: ApiService,
    private modalService: BsModalService,
    private fb: FormBuilder,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.apiService.cargarConfesiones().subscribe((confesiones) => {
      this.confesiones = confesiones;
      console.log(confesiones);
    });
  }

  darMeGusta(confesionId: number) {
    this.apiService.darMeGusta(confesionId);
    this.showSuccess();
  }

  private showSuccess() {
    this.toastr.success('', 'Te ha gustado esta publicacion!', {
      easeTime: 500,
      timeOut: 2000,
    });
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  reportar(confesionId: number) {
    const reporte = {
      confesionId,
      motivo: this.formulario.get('motivo')?.value,
    };

    console.log(reporte);
  }

  comentar(confesionId: number) {
    if (this.comentarFormulario.valid) {
      this.apiService.comentarConfesion(
        this.comentarFormulario.get('comentario')?.value,
        confesionId
      );
      this.comentarFormulario.reset();
      window.location.reload();
    }
  }
}
