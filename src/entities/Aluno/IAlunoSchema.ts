import { Model } from 'mongoose';
import IAlunoDTO from './IAlunoDTO'

export default interface IAlunoSchema extends Model<IAlunoDTO> {
  all(): Promise<IAlunoDTO>
  add(aluno: IAlunoDTO): Promise<IAlunoDTO>
}