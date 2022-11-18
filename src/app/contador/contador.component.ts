import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  contador: number = 0
  @Output() cambiarValorContador = new EventEmitter<number>()

  constructor() { }

  ngOnInit(): void {
  }

  restarUnidad(){
    if(this.contador-1 >= 0){
      this.contador--
      this.cambiarValorContador.emit(this.contador)
    }
  }
  sumarUnidad(){
    this.contador++
    this.cambiarValorContador.emit(this.contador)
  }
}
