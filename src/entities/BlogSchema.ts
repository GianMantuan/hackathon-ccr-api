import { model, Schema } from 'mongoose'

const BlogSchema: Schema = new Schema({
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

export default model("Blog", BlogSchema)