import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormularioComponent } from '../componentes/formulario/formulario.component';
import { InformacionComponent } from '../componentes/informacion/informacion.component';
import { ConfesionesComponent } from '../componentes/confesiones/confesiones.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    FormularioComponent,
    InformacionComponent,
    ConfesionesComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent {}
