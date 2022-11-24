import { IImagen } from "./IImagen"
import { IClasifacion } from "./IClasificacion"

export interface INoticia{
    imagen: IImagen
    enlace: string
    encabezado: string
    introduccion: string
    fecha: Date
    contieneVideo: boolean
    destacado: boolean
    clasificacion: IClasifacion
}