import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio-42',
  standalone: true,
  imports: [],
  templateUrl: './ejercicio-42.component.html',
  styleUrl: './ejercicio-42.component.css'
})
export class Ejercicio42Component {
  public centroEducativo: string= "IES Playamar";
  public localidad: string = "Torremolinos";
  public familiasProfesionales: string[]= ["Informatica y Comunicaciones", "Transporte y Mantenimiento"];
  public logo: string =  'https://iesplayamar.es/wp-content/uploads/2021/09/logo-ies-playamar.png'

  public get nombreCapitalizado(): string{
    return this.centroEducativo.toUpperCase();
  }

  public getIntercambio(): void{
    if(this.centroEducativo==="IES Playamar"){
      this.centroEducativo="IES Jacaranda"
      this.localidad="Churriana"
      this.familiasProfesionales=["Hosteleria","Turismo"]
      this.logo='https://hosteleriajacaranda.es/wp-content/uploads/2021/09/logo_iesjacaranda.png'
    }else{
      this.centroEducativo="IES Playamar";
      this.localidad="Torremolinos";
      this.familiasProfesionales=["Informatica y Comunicaciones", "Transporte y Mantenimiento"];
      this.logo= 'https://iesplayamar.es/wp-content/uploads/2021/09/logo-ies-playamar.png';
    }

  }

}
