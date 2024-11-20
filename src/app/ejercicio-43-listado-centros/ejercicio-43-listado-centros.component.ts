import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio-43-listado-centros',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ejercicio-43-listado-centros.component.html',
  styleUrl: './ejercicio-43-listado-centros.component.css'
})

export class Ejercicio43ListadoCentrosComponent {

public centrosEducativos: Centro[] =[centro1,centro2,centro3,centro4,centro5]

public centroEliminado?: Centro;
public centroAniadido?: Centro;
public centro?: Centro =this.centrosEducativos[0];
public indice: number= 0;

public pilaCentros: Centro[]=[];

public eliminarUltimoCentro(): void{
  this.centroEliminado= this.centrosEducativos.pop();
  if(this.centroEliminado){
    this.pilaCentros.push(this.centroEliminado);
    if(this.indice !=0){
      this.indice --;
    }
  }

}
public insertarCentro(): void{
  if(this.centrosEducativos.length !=0){
    this.centrosEducativos.splice(this.indice,0,this.pilaCentros.pop() || centro1)
  }else{
    this.centrosEducativos[0] = this.pilaCentros.pop() || centro1
  }
  }

public centroAnterior(): void{
  if(this.indice > 0){
    this.indice--;
    this.centro=this.centrosEducativos[this.indice]
  }
}

public centroSiguiente(): void{
  if(this.indice < this.centrosEducativos.length -1){
    this.indice ++;
    this.centro=this.centrosEducativos[this.indice]
  }
}

}
export interface Centro {
  nombre: string;
  localidad: string;
  familiasProfesionales: string[];
  logo: string;
};
export const centro1: Centro={
  nombre: "IES Playamar",
  localidad: "Torremolinos",
  familiasProfesionales: ["Informatica y Comunicaciones", "Transporte y Mantenimiento"],
  logo: 'https://iesplayamar.es/wp-content/uploads/2021/09/logo-ies-playamar.png'
};
export const centro2: Centro={
  nombre: "IES Jacaranda",
  localidad: "Churriana",
  familiasProfesionales: ["Hosteleria", "Turismo"],
  logo: 'https://hosteleriajacaranda.es/wp-content/uploads/2021/09/logo_iesjacaranda.png'
};
export const centro3: Centro={
  nombre: "IES Victoria Kent",
  localidad: "Marbella",
  familiasProfesionales: ["Sanidad","Informatica y Redes"],
  logo: 'https://www.iesvictoriakentmarbella.es/pluginfile.php?file=/2/course/section/5/LOGO%20.jpg'
};
export const centro4: Centro={
  nombre: "IES Los Colegiales",
  localidad: "Antequera",
  familiasProfesionales: ["Sanidad","Electricidad y Electronica","Instalacion y Mantenimiento"],
  logo: 'https://blogsaverroes.juntadeandalucia.es/iesloscolegiales/files/2021/09/logoverde.png'
};
export const centro5: Centro={
  nombre: "IES Rio Verde",
  localidad: "Marbella",
  familiasProfesionales: ["Sanidad","Electricidad y Electronica","Instalacion y Mantenimiento"],
  logo: 'https://www.iesrioverde.es/wp-content/uploads/2020/10/cropped-logo-negro-4.png'
};






