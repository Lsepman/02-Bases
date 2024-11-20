import { Component} from '@angular/core';

@Component({
  selector: 'app-heroes-heroe', //Se llama asi porque se encuentra dentro de heroes
  standalone: false,
  templateUrl: './heroe.component.html',
  styleUrl: './heroe.component.css'
})
export class HeroeComponent {
  public nombre: string= "Goku";
  public edad: number=35;
  private nombrePrivado='Kakarot'

  public get nombreCapitalizado(): string{
    return this.nombre.toUpperCase();
  }

  public getDescripcionHero(){
    return `${this.nombre} - ${this.edad}`;
  }
  private getNombrePrivado(): string{
    return this.nombrePrivado;
  }

  public cambiarNombre(): void{
    this.nombre= "kakarot"
  }
  public cambiarEdad(): void{
    this.edad= 36
  }

  public resetDatos(): void{
    this.nombre="Goku"
    this.edad=35
  }

}
