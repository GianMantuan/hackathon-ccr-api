import Empresa from "../../entities/EmpresaSchema";

export default class EmpresaDeleteService {
  public async delete(_id: string) {
    return await Empresa.deleteOne({_id});
  }
}
