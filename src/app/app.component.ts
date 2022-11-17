import { Component } from '@angular/core';
import { INoticia } from './noticia/INoticia';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ejerciciocomponentes';

  noticias: INoticia[] = [{
    imagen: {
      src: "https://picsum.photos/id/237/200/300",
      alt: "Perrito"
    },
    enlace: "https://www.bbc.com/mundo/noticias-internacional-63537027",
    encabezado: "Un perrito negro esta en busca de adopción",
    introduccion: "Un perrito que lleva mucho tiempo viviendo en la calle busca ser adoptado por una familia",
    fecha: new Date(2022,10,15),
    contieneVideo: false,
    destacado: true
  },
  {
    imagen: {
      src: "https://picsum.photos/id/300/200/300",
      alt: "Paisaje"
    },
    enlace: "https://www.bbc.com/mundo/noticias-internacional-63644527",
    encabezado: "Viaje este diciembre a este lugar para disfrutar las fiestas navideñas",
    introduccion: "Es un bonito lugar para pasar en familia",
    fecha: new Date(),
    contieneVideo: true,
    destacado: false
  },
]

}
