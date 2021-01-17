import IAlunoDTO from "src/entities/Aluno/IAlunoDTO";
import Aluno from "../../entities/AlunoSchema";

export default class AlunoUpdateService {
  public async update(_id: string, aluno: IAlunoDTO) {
    return await Aluno.updateOne({ _id }, aluno);
  }
}
