import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import {  } from 'stream';@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})

export class PaisInputComponent implements OnInit{

  // Creación de un evento de salida
  //Los eventos sse les llama con on para identificarlos
  //Importante definir el tipo de lo que va a devolver el evento, es decir  <string> ya que el termino es un string
  @Output () onEnter : EventEmitter <string> = new EventEmitter();

  //Evento que se va a emitir cuando la persona deja de escribir
  @Output () onDebounce : EventEmitter <string> = new EventEmitter();

  @Input () placeholder: string = ''; //Nueva propiedad
  
  //Creación manual de un observable (hay otras alternativas)
  debouncer: Subject<string> = new Subject(); 

  termino: string = '';

  //Se dispara una única vez cuando el componente es creado
  ngOnInit(): void {
    //Suscripción al evento debauncer que se lanza cuando el usuario deja de escribir
    this.debouncer
      .pipe(//Tuberia que permite transformar la salida del subscribe
        debounceTime(300) //Milesimas de segundo que va  esperar antes de que se emita el siguiente valor
      )
      .subscribe(valor => {
        // console.log('debauncer', valor);
        this.onDebounce.emit( valor );
      });
  }

  // Cuando se pulsa enter en el Input de la pagina por-pais se redirige a la siguiente funcion buscar() 
  // Hay que emitir el termino, por lo que se ha de definir un Output
  buscar()
  {
    //Suscripción a los valores que emite
    this.onEnter.emit( this.termino );
  }

  teclaPresionada (){ //Podria llevar event: any como argumento pero no es necesario 
    // const valor = event.target.value;
    console.log(this.termino);
    
    //Llamada a debouncer y emite un valor. El valor a emitir es el siguiente (next)
    this.debouncer.next(this.termino);
    //Ya está conectado el debauncer, cada vez que se pulse una tecla, llama al next que está suscrito y recibe nuevos valores
    
  }

}
