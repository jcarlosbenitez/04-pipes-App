import { Component, OnInit, enableProdMode } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = 'Carlos';
  genero: string = 'masculino';

  invitacion = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };
  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'juan'];
  clientesMapa = {
    '=0': 'no tenemos ningun cliente esperando.',
    '=1': 'tenemos a un cliente esperando.',
    other: 'tenemos # clientes esperando',
  };

  cambiarCliente() {
    this.nombre = 'Monse';
    this.genero = 'femenino';
  }
  borrarCliente() {
    this.clientes.splice(0, 1);
    //elimina el ultimo de un arreglo
    // this.clientes.pop()
  }

  //key value Pipe
  persona = {
    nombre: 'carlos',
    edad: 30,
    direccion: 'netzahualcoyotl',
  };

  heroes = [
    {
      nombre: 'superman',
      vuela: true,
    },
    {
      nombre: 'acuaman',
      vuela: true,
    },

    {
      nombre: 'batman',
      vuela: true,
    },
  ];
  //Async Pipe

  miObserbale = interval(5000);
  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('fin de la promesa');
    }, 3500);
  });
}
