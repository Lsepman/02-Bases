import { Component, EventEmitter, input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-add-personaje',
  standalone: false,
  templateUrl: './add-personaje.component.html',
  styleUrl: './add-personaje.component.css'
})
export class AddPersonajeComponent {

  //!Creamos el evento
    @Output()
    public onNewPersonaje: EventEmitter<Personaje>= new EventEmitter();

    public personaje: Personaje={
    nombre: '',
    fuerza: 0
  }

  public addPersonaje(): void{

    debugger;

    console.log(this.personaje)
    if (this.personaje.nombre.length === 0) return;

    //!Para no pasar la referencia se crea un nuevo personaje con los valores vacios en este caso
    this.onNewPersonaje.emit(this.personaje);
    this.personaje ={
      nombre: '',
      fuerza: 0
    };

    //this.personaje.nombre="";
    //this.personaje.fuerza=0;
  }

}
