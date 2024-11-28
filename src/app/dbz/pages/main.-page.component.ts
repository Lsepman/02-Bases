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

public onNewPersonaje(personaje: Personaje): void{
  console.log("MainPage")
  console.log(personaje)

}
  constructor() { }

  ngOnInit() { }
}
