import Empresa from "../../entities/EmpresaSchema";

export default class EmpresaAllService {
  public async all()  {
    return await Empresa.find();
  }
}
