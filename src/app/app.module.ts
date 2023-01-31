import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PaisModule } from './pais/pais.module';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [ //Importación de los MODULOS para indicar al app.module que existen y pueden usarse (también se podran usar los componentes definidos dentro de ellos)
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, //Se importa aqui ya que este modulo suele ser generico pero se podría importqr en ptros modulos mas internos
    PaisModule,
    SharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
