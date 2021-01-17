import Aluno from '../../entities/AlunoSchema'
import Empresa from '../../entities/EmpresaSchema'

export default class AlunoEmpresaService {
  public async alunoEmpresas(id: string) {
    const empresas = []
    const {empresa} =  await Aluno.findById(id);
    
    for (const {_id} of empresa) {
      empresas.push(await Empresa.findById(_id))
    }

    return empresas
  }
}