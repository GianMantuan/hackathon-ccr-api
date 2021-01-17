import IEmpresaDTO from "src/entities/Empresa/IEmpresaDTO";
import Empresa from "../../entities/EmpresaSchema";

export default class EmpresaUpdateService {
  public async update(_id: string, empresa: IEmpresaDTO) {
    return await Empresa.updateOne({ _id }, empresa);
  }
}
