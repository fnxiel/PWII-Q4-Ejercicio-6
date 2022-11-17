import { Component, Input, OnInit } from '@angular/core';
import { INoticia } from './INoticia';

@Component({
  selector: 'app-noticia',
  templateUrl: './noticia.component.html',
  styleUrls: ['./noticia.component.css']
})
export class NoticiaComponent implements OnInit {
  @Input() noticia?: INoticia

  constructor() { }

  ngOnInit(): void {
  }

}
