import Empresa from "../../entities/EmpresaSchema";
import IEmpresaDTO from "../../entities/Empresa/IEmpresaDTO";

export default class EmpresaAddService {
  public async add(empresa: IEmpresaDTO) {
    return await Empresa.create(empresa);
  }
}
