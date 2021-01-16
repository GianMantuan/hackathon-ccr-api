import Aluno from '../../entities/AlunoSchema'

export default class AlunoFindService {
  public async findAlunoById(id: string) {
    return await Aluno.findById(id)
  }
}