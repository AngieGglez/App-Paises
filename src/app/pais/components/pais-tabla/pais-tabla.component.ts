import { Component, Input, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styles: [
  ]
})
export class PaisTablaComponent implements OnInit {

  //Se define Input ya que paises no existe en el html, pero se tiene que pasar del componente por-pais como parametro (donde se hace la llamada a este componente)
  @Input() paises: Country[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
