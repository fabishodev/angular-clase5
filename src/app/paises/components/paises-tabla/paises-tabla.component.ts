import { Component, Input, OnInit } from '@angular/core';
import { SearchByNameCountry } from '../../interfaces/by-name.interfaces';

@Component({
  selector: 'app-paises-tabla',
  templateUrl: './paises-tabla.component.html',
  styles: [
    `.small-flag{width: 60px;}`
  ]
})
export class PaisesTablaComponent implements OnInit {

  @Input() paises: SearchByNameCountry[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
