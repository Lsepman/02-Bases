import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import{HeroeComponent} from './components/heroe/heroe.component';
import { ListaComponent } from './components/lista/lista.component';


@NgModule({
  imports:[CommonModule], //Siempre hay que importarlo
  providers:[],
  declarations:[HeroeComponent,ListaComponent],
  exports: [HeroeComponent,ListaComponent],

})

export class HeroeModule{

}
