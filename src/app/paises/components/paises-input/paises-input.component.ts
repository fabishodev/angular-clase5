import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-paises-input',
  templateUrl: './paises-input.component.html',
  styles: [
  ]
})
export class PaisesInputComponent implements OnInit {

  @Input() placeholder: string = '';

  @Output() onEnter: EventEmitter<string> = new EventEmitter()

  query: string = "";

  constructor() { }

  buscar(){
    this.onEnter.emit(this.query)
  }

  ngOnInit(): void {
  }

}
