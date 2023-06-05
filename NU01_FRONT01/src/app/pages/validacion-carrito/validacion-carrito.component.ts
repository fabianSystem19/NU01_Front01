import { Component } from '@angular/core';

@Component({
  selector: 'app-validacion-carrito',
  templateUrl: './validacion-carrito.component.html',
  styleUrls: ['./validacion-carrito.component.css']
})
export class ValidacionCarritoComponent {

  elementos: any[] = [
    { img: 'Foto', producto: 'Aifon', precio:500, cantidad: 2},
    { img: 'Foto', producto: 'RunRun', precio:300, cantidad: 3},
  ];
  eliminarElemento(elemento: any) {
    const indice = this.elementos.indexOf(elemento);
    if (indice !== -1) {
      this.elementos.splice(indice, 1);
    }
  }
}
