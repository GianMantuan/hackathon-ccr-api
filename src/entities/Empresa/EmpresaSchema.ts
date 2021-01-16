import { model, Schema } from 'mongoose'
import IEmpresaDTO from './IEmpresaDTO'
import IEmpresaSchema from './IEmpresaSchema'

const EmpresaSchema = new Schema<IEmpresaDTO, IEmpresaSchema>({
  nome: {
    type: String,
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
  CNPJ: {
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
})

export default model<IEmpresaDTO, IEmpresaSchema>("Empresa", EmpresaSchema)