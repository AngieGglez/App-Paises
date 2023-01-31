import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Observable , of} from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Country } from '../interfaces/pais.interface';
import { Stream } from 'stream';

// Los servicios on singleton que están habilitados de mqanera global providedIn: 'root'
@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';
  private apiUrlV2: string = 'https://restcountries.com/v2';

  // Importamos el servicio http que proviene de HttpClient para realizar conexion con servicios
  constructor(private http: HttpClient) { }

  get httParams (){
    return new HttpParams().set('fields','name;capital;alpha2Code;flag;population');
  }

  buscarPais( termino: string) : Observable<Country[]> {
    // Contruir la url https://restcountries.com/v3.1/name/united
    const url = `${ this.apiUrl }/name/${ termino }`;
    
    return this.http.get<Country[]>(url); //se devuelve un observable


    // return this.http.get(url)
    //   .pipe(
    //     //Se puede colocar cualquier operador de rxjs (funciones que se van a ejecutar en funcion de las operaciones)
    //     //Catch atrapa el error y devuelve un array vacio y aunque se manejen del lado de la suscripción ya no llega el error
    //     catchError( err => of([])) //of([]) es una función que devuelve observables
    //   );
  }

  buscarCapital( termino: string) : Observable<Country[]> {
    // Contruir la url https://restcountries.com/v2/capital/{capital}
    const url = `${ this.apiUrl }/capital/${ termino }`;
    
    return this.http.get<Country[]>(url); //se devuelve un observable
  }
  
  getPaisPorAlpha (id: Stream): Observable<Country> {
    const url = `${ this.apiUrl }/alpha/${ id }`;
    
    return this.http.get<Country>(url); //se devuelve un observable
  }

  buscarRegion ( region: string ) : Observable<Country[]> {

    const url = `${ this.apiUrlV2 }/region/${ region }`;
    return this.http.get<Country[]>(url, { params: this.httParams})
      .pipe(
        tap(console.log)
      )
  }

}
