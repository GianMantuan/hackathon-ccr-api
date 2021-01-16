import { model, Schema } from 'mongoose'

enum Curso {
  ENSINO_FUNDAMENTAL = 0,
  ENSINO_MEDIO = 1,
  CURSO_TECNICO = 2,
  ENSINO_SUPERIOR = 3
};

const AlunoSchema: Schema = new Schema({
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
    enum: Object.values(Curso),
    required: true
  },
  empresa: {}
})

export default model("Aluno", AlunoSchema)