import { model, Schema } from 'mongoose'
import IBlogDTO from './IBlogDTO'
import IBlogSchema from './IBlogSchema'

const BlogSchema = new Schema<IBlogDTO, IBlogSchema>({
  titulo: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  texto: {
    type: String,
    required: true
  },
  autor: {
    type: String,
    required: true
  },
})

export default model<IBlogDTO, IBlogSchema>("Blog", BlogSchema)