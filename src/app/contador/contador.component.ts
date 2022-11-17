import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent implements OnInit {
  contador: number = 0

  constructor() { }

  ngOnInit(): void {
  }

  restarUnidad(){
    this.contador--
  }
  sumarUnidad(){
    this.contador++
  }
}
