import { IImagen } from "./IImagen"

export interface INoticia{
    imagen: IImagen
    enlace: string
    encabezado: string
    introduccion: string
    fecha: Date
    contieneVideo: boolean
    destacado: boolean
}