import { NgModule } from '@angular/core'
import { RouterModule, Routes} from '@angular/router';
import { CapitalesComponent } from './paises/pages/capitales/capitales.component';
import { PaisComponent } from './paises/pages/pais/pais.component';
import { PaisesComponent } from './paises/pages/paises/paises.component';
import { RegionesComponent } from './paises/pages/regiones/regiones.component';

const routes: Routes = [
    {
        path: '',
        component: PaisesComponent,
        pathMatch: 'full'
    },
    {
        path: 'regiones',
        component: RegionesComponent,        
    },
    {
        path: 'capitales',
        component: CapitalesComponent,  
    },
    {
        path: 'pais/:code',
        component: PaisComponent,  
    },
    {
        path: '**',
        redirectTo: ''
    }
]

@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule{

}