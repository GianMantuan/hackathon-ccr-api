import Empresa from "../../entities/EmpresaSchema";

export default class EmpresaFindService {
  public async find(id: string) {
    return await Empresa.findById(id);
  }
}
