import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import {PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button{
      margin-right: 5px; /**Separación de los botones de solo este componente*/
    }`
  ]
})
export class PorRegionComponent {

  regiones: string []= [ 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActiva : string = '';
  paises: Country[] = [];

  //Si se quiere usar un servicio en un componente hay que inyectarlo en el constructor
  //Inyectando private paisService : PaisService, ya se tienen acceso a todos los metodos y servicios del servicio importado
  constructor( private paisService : PaisService) { }

  getClaseCSS( region: string ): string {
    return (region === this.regionActiva) ? 'btn-primary' : 'btn-online-primary';
  }

  activarRegion ( region: string ){
    if( region === this.regionActiva ) { return;} //No cargar los paises si la region activa ya es la misma
    this.regionActiva = region;
    this.paises= [];

    this.paisService.buscarRegion (region)
    //para poder consumir el servicio hay que hacer el suscribe
      .subscribe( paises => this.paises = paises);
  }
}
