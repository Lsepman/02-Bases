import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/personaje.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html',
})

export class MainPageComponent {

  //Dentro del constructor instanciamos dbzService, donde llamamos a un servicio
  constructor(public dbzService: DbzService) { }

}
