import Aluno from '../../entities/AlunoSchema'
import IAlunoDTO from 'src/entities/Aluno/IAlunoDTO'

export default class AlunoAddService {
  public async add(aluno: IAlunoDTO) {
    return await Aluno.create(aluno)
  }
}