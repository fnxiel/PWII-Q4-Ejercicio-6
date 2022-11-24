import { Component } from '@angular/core';
import { IClasifacion } from './noticia/IClasificacion';
import { INoticia } from './noticia/INoticia';


const todasNoticias: INoticia[] = [{
  imagen: {
    src: "https://picsum.photos/id/237/200/300",
    alt: "Perrito"
  },
  enlace: "https://www.bbc.com/mundo/noticias-internacional-63537027",
  encabezado: "Un perrito negro esta en busca de adopción",
  introduccion: "Un perrito que lleva mucho tiempo viviendo en la calle busca ser adoptado por una familia",
  fecha: new Date(2022,10,15),
  contieneVideo: false,
  destacado: true,
  clasificacion: {
    valor: "c",
    descripcion: "Clasificado"
  }
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
  destacado: false,
  clasificacion: {
    valor: "a",
    descripcion: "Anuncio"
  }
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
  destacado: false,
  clasificacion: {
    valor: "a",
    descripcion: "Anuncio"
  }
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
  destacado: false,
  clasificacion: {
    valor: "n",
    descripcion: "Novedad"
  }
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
  destacado: false,
  clasificacion: {
    valor: "n",
    descripcion: "Novedad"
  }
},
]

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ejerciciocomponentes';
  noticias: INoticia[] = todasNoticias

  clasificaciones: IClasifacion[] = [{
    valor: "a",
    descripcion: "Anuncio"
  },
  {
    valor: "c",
    descripcion: "Clasificado"
  },
  {
    valor: "n",
    descripcion: "Novedad"
  }
]
  
  nuevaNoticia: INoticia = {
    encabezado: 'Nueva noticia',
    introduccion: 'Esta noticia esta en desarrollo',
    enlace: "https://www.google.com",
    imagen: {
      src: "https://picsum.photos/id/300/200/300",
      alt: "Paisaje"
    },
    fecha: new Date(),
    contieneVideo: false,
    destacado: false,
    clasificacion: {
      valor: "n",
      descripcion: "Novedad"
    }
  }

  filtrarNoticias(cantidad: number){
    if(cantidad > 0){
      this.noticias = todasNoticias.slice(0, cantidad)
    }else{
      this.noticias = todasNoticias
    }
  }

  eliminarUltimaNoticia(){
    this.noticias.pop()
  }

  agregarNoticia(){
    //console.log(this.nuevaNoticia.clasificacion)
    console.log({
      ...this.nuevaNoticia, 
      imagen: {...this.nuevaNoticia.imagen}, 
      clasificacion: {...this.nuevaNoticia.clasificacion}
    })
    this.noticias.push(
      {
        ...this.nuevaNoticia, 
        imagen: {...this.nuevaNoticia.imagen}, 
        clasificacion: {
          valor: this.nuevaNoticia.clasificacion.valor,
          descripcion: this.nuevaNoticia.clasificacion.descripcion
        }
      }
    ) //spread
    /*
    this.noticias.push({
      imagen: this.nuevaNoticia.imagen,
      enlace: this.nuevaNoticia.enlace,
      encabezado: this.nuevaNoticia.encabezado,
      introduccion: this.nuevaNoticia.introduccion,
      fecha: new Date(),
      contieneVideo: true,
      destacado: true
    })
    */
  }

}
