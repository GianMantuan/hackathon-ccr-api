import { Model } from 'mongoose';
import IEmpresaDTO from './IEmpresaDTO'

export default interface IEmpresaSchema extends Model<IEmpresaDTO> {
  all(): Promise<IEmpresaDTO>
  findEmpresa(id: string): Promise<IEmpresaDTO>
  add(aluno: IEmpresaDTO): any
}