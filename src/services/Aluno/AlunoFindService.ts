import Aluno from '../../entities/AlunoSchema'

export default class AlunoAllService {
  public async add(id: string) {
    return await Aluno.findById(id)
  }
}