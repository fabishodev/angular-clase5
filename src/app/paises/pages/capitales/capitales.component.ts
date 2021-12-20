import { Component, OnInit } from '@angular/core';
import { SearchByNameCountry } from '../../interfaces/by-name.interfaces';
import { PaisesService } from '../../services/paises.service';

@Component({
  selector: 'app-capitales',
  templateUrl: './capitales.component.html',
  styles: [
  ]
})
export class CapitalesComponent implements OnInit {

  error:  boolean = false;
  paises: SearchByNameCountry[] = []

  constructor(private paisesService: PaisesService) { }

  ngOnInit(): void {
  }

  buscar(query: string){
    this.error = false;
    console.log(query);
    this.paisesService.buscarCapital(query)
    .subscribe((res) =>{
      console.log(res);
      if(!res.length){
        this.error = true;
        this.paises = [];
        return;
      }
      this.paises = res;     
    });
  }

}
