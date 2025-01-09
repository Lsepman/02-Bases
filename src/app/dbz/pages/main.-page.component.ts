import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html',
})

export class MainPageComponent {

  //Dentro del constructor instanciamos dbzService, donde llamamos a un servicio
  constructor(private dbzService: DbzService){}
  //Creamos un get que nos va a devolver un array de personajes y lo hacemos porque al poner el servicio privado tenemos que crearlo para poder hacer uso
  get personajes(): Personaje[]{
    return this.dbzService.personajes;
  }
  deletePersonaje(id: string): void{
    this.dbzService.deletePersonaje(id);
  }
  addPersonaje (personaje: Personaje){
    this.dbzService.addPersonaje(personaje)
  }

}
