import { Component} from "@angular/core"

/*import { Component } from "@angular/core";

@Component({
  selector: "app-contador",
  template: "<h1>Hola mundo!!</h1>",
  standalone: true,

})

export class ContadorComponent{

}*/

@Component({
  selector: 'app-contador',
  standalone: false,
  template: `<h3>Hola Mundo</h3>`,
  styleUrl: "contador.component.css"
})

export class ContadorComponent {
  public title = 'Mi primera aplicacion con contador';
  public contador: number= 50;
  public cantidad: number=2;

  incrementarContador(): void{
    this.contador += this.cantidad;
  }
  decrementarContador(): void{
    this.contador -= this.cantidad;
  }

  resetearContador(): void{
    this.contador= 0;
  }

}
