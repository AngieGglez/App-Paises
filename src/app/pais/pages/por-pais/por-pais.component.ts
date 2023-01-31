import { Component} from '@angular/core';
import { info } from 'console';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
    `
      li{
        cursor: pointer; /* Hace que el cursor se convieryta en puntero en mano */
      }
    `
  ]
})
export class PorPaisComponent{

  //Definicion de la propiedad termino que se asigna en la páginaq  [(ngModel)]="termino"
  termino : string = 'Buscar pais...';
  hayError: boolean =false;
  paises  : Country[] = [];
  paisesSugeridos : Country[] = [];
  mostrarSugerencias: Boolean = false;

  constructor(private paisService: PaisService) { } //Inyección del servicio http y permite consumir dicho servicio

  buscar(termino: string){
    this.hayError=false;
    this.termino = termino; //Se asigna a la propiedad de la clase, el termino que se recibe por parámetro
    // console.log(this.termino);
    this.mostrarSugerencias = true;
    
    this.paisService.buscarPais(this.termino) //Consume el servicio buscarPais definido en pais.service.ts
      //Para que un observable haga algo ha de estar suscrito
      .subscribe( (paises) => {
        console.log(paises);
        this.paises = paises;
      }, (err) =>{
        this.hayError=true;
        this.paises = [];
      });
  }

  sugerencias( termino : string){
    this.hayError = false;
    
    //Sugerencias
    this.termino = termino;

    this.paisService.buscarPais( termino )
      .pipe(
        tap(console.log)
      )
      .subscribe( 
        paises => this.paisesSugeridos = paises.splice(0,5),
        (err) => this.paisesSugeridos = []
    )}

    buscarSugerido (termino : string){
      this.buscar (termino);
    }

}
