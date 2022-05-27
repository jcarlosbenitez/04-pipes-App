import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'carlos';
  nombreUpper: string ='CARLOS';
  nombreCompleto: string = 'JuAn CaRlos';

  fecha: Date = new Date()


}
