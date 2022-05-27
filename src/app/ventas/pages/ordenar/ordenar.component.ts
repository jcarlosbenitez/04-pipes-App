import { Component, OnInit } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [],
})
export class OrdenarComponent implements OnInit {
  public nos = 'nosotros';
  enMayusculas: boolean = false;

  ordenarPor: string ="";
  heroes: Heroe[] = [
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul,
    },
    {
      nombre: 'Batman',
      vuela: false,
      color: Color.negro,
    },
    {
      nombre: 'Robbin',
      vuela: false,
      color: Color.verde,
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo,
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde,
    }
  ];
  constructor() {}

  ngOnInit(): void {}

  change() {
    console.log('entro');
    this.enMayusculas = !this.enMayusculas;
    console.log(this.enMayusculas);
  }

  cambiarOrden(valor:string) {
    this.ordenarPor = valor;
    console.log(this.ordenarPor)
  }
}
