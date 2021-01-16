import Aluno from '../../entities/AlunoSchema'

export default class AlunoAllService {
  public async all() {
    return await Aluno.find()
  }
}