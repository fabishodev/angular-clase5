import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisesInputComponent } from './components/paises-input/paises-input.component';
import { PaisesTablaComponent } from './components/paises-tabla/paises-tabla.component';
import { CapitalesComponent } from './pages/capitales/capitales.component';
import { PaisComponent } from './pages/pais/pais.component';
import { PaisesComponent } from './pages/paises/paises.component';
import { RegionesComponent } from './pages/regiones/regiones.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PaisesInputComponent,
    PaisesTablaComponent,
    CapitalesComponent,
    PaisComponent,
    PaisesComponent,
    RegionesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    CapitalesComponent,
    PaisComponent,
    PaisesComponent,
    RegionesComponent,
  ]
})
export class PaisesModule { }
