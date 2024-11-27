import { Component, Input, input } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-lista',
  standalone: false,
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  @Input() //Input es un decorador que nos permite recibir informacion de un componente padre a un componente hijo
  public listaPersonajes: Personaje[]= [
    {nombre: 'Trunks',
      fuerza: 10000
    }
  ];

}
