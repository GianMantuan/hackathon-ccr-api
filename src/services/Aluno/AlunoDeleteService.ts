import Aluno from "../../entities/AlunoSchema";

export default class AlunoDeleteService {
  public async delete(_id: string) {
    return await Aluno.deleteOne({_id});
  }
}
