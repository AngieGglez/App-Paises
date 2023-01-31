import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap , tap} from 'rxjs/operators'; //switchMap Operador que premite recibir un observable y enviar un observable
                                                //tap operador que dispara un efecto secundario
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  pais!: Country; //Poner ! significa que pais puede ser nulo pero tratalo como si tueviera datos

  //ActivatedRoute permite suscribirnos a cualquier cambio de la url y es una propiedad por estar definida en el constructor
  constructor(
    private activatedRoute: ActivatedRoute,
    private paisService: PaisService //Inyección del servicio
    ) { }

  ngOnInit(): void {

    this.activatedRoute.params
    .pipe(
        switchMap( ({ id }) => this.paisService.getPaisPorAlpha( id )  ),
        tap( console.log) //Recibe el producto del obserbale y muestra el contenido con el console log
      )
      .subscribe( pais => this.pais = pais );
     

    // this.activateRoute.params
    //   .subscribe( ({id}) =>{
    //     console.log(id);
    //     this.paisService.getPaisPorAlpha(id)
    //       .subscribe( pais =>{
    //         console.log(pais);
    //       });
    //   })
  }

}
