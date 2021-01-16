import {Document} from 'mongoose'

export default interface IBlogDTO extends Document {
  titulo: string
  descricao: string
  texto: string
  autor: string
}