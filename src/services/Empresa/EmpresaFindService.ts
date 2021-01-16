import Empresa from "../../entities/EmpresaSchema";

export default class EmpresaFindService {
  public async findEmpresaById(id: string) {
    return await Empresa.findById(id);
  }
}
