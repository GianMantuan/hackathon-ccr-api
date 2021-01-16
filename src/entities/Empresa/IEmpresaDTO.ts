import {Document} from 'mongoose'

export default interface IEmpresaDTO extends Document {
  nome: string
  email: string
  telefone: string
  cnpj: string
  cidade: string
  bairro: string
  estado: string
}