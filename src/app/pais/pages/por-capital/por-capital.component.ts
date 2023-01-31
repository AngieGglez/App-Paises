import { Component} from '@angular/core';
import { info } from 'console';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent{

  termino : string  = 'Buscar capital...';
  hayError: boolean = false;
  paises  : Country[] = [];

  constructor(private paisService: PaisService) { } //Inyección del servicio http y permite consumir dicho servicio

buscar(termino: string){
    this.hayError=false;
    this.termino = termino; //Se asigna a la propiedad de la clase, el termino que se recibe por parámetro
    
    this.paisService.buscarCapital(this.termino) //Consume el servicio buscarPais definido en pais.service.ts
      //Para que un observable haga algo ha de estar suscrito
      .subscribe( (paises) => {
        this.paises = paises;
      }, (err) =>{
        this.hayError=true;
        this.paises = [];
      });
  }

}
