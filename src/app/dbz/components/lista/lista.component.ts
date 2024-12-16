import { Personaje } from './../../interfaces/personaje.interface';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'dbz-lista',
  standalone: false,
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent {

  //!Input para recibir posibles eventos
  @Input() //Input es un decorador que nos permite recibir informacion de un componente padre a un componente hijo
  public listaPersonajes: Personaje[]= [
    {
      nombre: 'Trunks',
      fuerza: 10000
    }
  ];

//!Output para emitir eventos.
  @Output()
  public onDeletePersonaje: EventEmitter<number>= new EventEmitter();

  //!Recibe el indice de la lista. Se recibe desde lista.component.html que se genera con el onclick el indice recibido por ngfor
  public pasarIndice(indice: number): void{
    //!Recibe el indice por parametro y lo emite.
    this.onDeletePersonaje.emit(indice)
  }




  }



