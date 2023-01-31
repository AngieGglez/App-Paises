import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PorPaisComponent } from './pais/pages/por-pais/por-pais.component';
import { PorRegionComponent } from './pais/pages/por-region/por-region.component';
import { PorCapitalComponent } from './pais/pages/por-capital/por-capital.component';
import { VerPaisComponent } from './pais/pages/ver-pais/ver-pais.component';

const routes: Routes = [
    {
        //Definicion de cada ruta, para ver las posibles configuraciones aplicables a las rutas: ctrl +  barra espaciadora
        path: '', //String vacio, el primer componente
        component: PorPaisComponent, //Para poder usarse aqui, tiene que estar exportado en pais.module.ts e importado en app.module.ts
        pathMatch: 'full'
    },
    {
        path: 'region',
        component: PorRegionComponent,
    },
    {
        path: 'capital',
        component: PorCapitalComponent,
    },
    {
        path: 'pais/:id', ///:id para que busque por codigo pais
        component: VerPaisComponent,
    },
    {
        path: '**', // ** Cualquier otro path que no esté definido ariba
        redirectTo: '', // '' es el home, que está definido al principio (string vacio)
    },
];

// Decorador, donde se definen imports, exports...
@NgModule({
    imports:[
        RouterModule.forRoot(routes) //Realiza la configuracion de las rutas, forRoot las rutas principales y routchild, para las rutas hijas
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}