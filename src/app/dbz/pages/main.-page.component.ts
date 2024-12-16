import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html',
})

export class MainPageComponent implements OnInit {

  public personajes: Personaje[]  = [
  {
  nombre: 'Krilin',
  fuerza: 150
  },
  {
    nombre: 'Goku',
    fuerza: 50000
  },
  {
    nombre: 'Vegeta',
    fuerza: 200
  },
  {
    nombre: 'Piccolo',
    fuerza: 100
  }
];

//!Metodo para crear personaje con el metodo push
public NewPersonaje(personaje: Personaje): void{
  //console.log("MainPage")
  //console.log(personaje)
  this.personajes.push(personaje)
}
//!Metodo para eliminar personaje que se pasa por indice recibido. Usamos el splice donde indicamos el indice que queremos eliminar e indicamos que solo queremos eliminar 1
public DeletePersonaje(indice: number): void{
   this.personajes.splice(indice,1)
}
  constructor() { }

  ngOnInit() { }
}
