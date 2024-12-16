import { Component } from '@angular/core';

import { Ejercicio42Component } from './ejercicio-42/ejercicio-42.component';
import { Ejercicio43ListadoCentrosComponent } from "./ejercicio-43-listado-centros/ejercicio-43-listado-centros.component";

import { ContadorModule } from './contador/contador.module';
import { HeroeModule } from './heroes/heroes.module';
import { DbzModule } from './dbz/dbz.module';


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [Ejercicio42Component,Ejercicio43ListadoCentrosComponent, ContadorModule,HeroeModule,DbzModule]
})
export class AppComponent {
  public title = 'Mi primera aplicacion con contador';
  public contador: number= 50;
  public cantidad: number=2;

  incrementarContador(): void{
    this.contador += this.cantidad;
  }
  decrementarContador(): void{
    this.contador -= this.cantidad;
  }

  resetearContador(): void{
    this.contador= 0;
  }
}

