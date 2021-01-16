import { model, Schema } from 'mongoose'
import IAlunoDTO from './IAlunoDTO'
import IAlunoSchema from './IAlunoSchema'

const AlunoSchema = new Schema<IAlunoDTO, IAlunoSchema>({
  nome: {
    type: String,
    required: true
  },
  idade: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  telefone: {
    type: String,
    required: true
  },
  cidade: {
    type: String,
    required: true
  },
  bairro: {
    type: String,
    required: true
  },
  estado: {
    type: String,
    required: true
  },
  experiencias: [{

  }],
  certificados: [{

  }],
  curso: {
    type: Number,
    enum: [0,1,2,3],
    required: true
  },
  empresa: {}
})

export default model<IAlunoDTO, IAlunoSchema>("Aluno", AlunoSchema)