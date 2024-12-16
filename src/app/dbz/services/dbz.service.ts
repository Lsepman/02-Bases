import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import {v4 as uuid } from 'uuid';1
//a-service para crear el servicio

//Injectable sirve para que sea reconocido como un servicio, hace que podamos utilizar la instancia en cualquier momento y punto de la app
@Injectable({providedIn: 'root'})
export class DbzService {
  constructor() {}
    public personajes: Personaje[]  = [
    {
    id: uuid(),
    nombre: 'Krilin',
    fuerza: 150
    },
    {
    id: uuid(),
    nombre: 'Goku',
    fuerza: 50000
    },
    {
    id: uuid(),
    nombre: 'Vegeta',
    fuerza: 200
    },
    {
    id: uuid(),
    nombre: 'Piccolo',
    fuerza: 100
    }
  ];

//!Metodo para crear personaje con el metodo push
public addPersonaje(personaje: Personaje): void{
  //console.log("MainPage")
  //console.log(personaje)
  const newPersonaje: Personaje = {id: uuid(),...personaje} //...personaje es igual que poner nombre: personaje.nombre, fuerza: personaje.fuerza. 
  this.personajes.push(newPersonaje)
}
//!Metodo para eliminar personaje que se pasa por indice recibido. Usamos el splice donde indicamos el indice que queremos eliminar e indicamos que solo queremos eliminar 1
public deletePersonaje(indice: number): void{
  this.personajes.splice(indice,1)
}


}
