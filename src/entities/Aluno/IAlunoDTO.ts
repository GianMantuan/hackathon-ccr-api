import {Document} from 'mongoose'

enum Curso {
  ENSINO_FUNDAMENTAL = 0,
  ENSINO_MEDIO = 1,
  CURSO_TECNICO = 2,
  ENSINO_SUPERIOR = 3
};

export default interface IAlunoDTO extends Document {
  nome: string;
  idade: string;
  email: string;
  telefone: string;
  cidade: string;
  bairro: string
  estado: string
  experiencias: Array<object>
  certificados: Array<object>
  curso: Curso
  empresa?: Array<object>
}