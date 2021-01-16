import Aluno from '../../entities/AlunoSchema'
import IAlunoDTO from 'src/entities/Aluno/IAlunoDTO'

export default class AlunoAllService {
  public async add(aluno: IAlunoDTO) {
    return await Aluno.create(aluno)
  }
}