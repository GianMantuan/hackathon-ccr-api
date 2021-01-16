import { Request, Response, NextFunction } from 'express';

import AlunoAllService from '../services/Aluno/AlunoAllService'
import AlunoFindService from '../services/Aluno/AlunoFindService'
import AlunoAddService from '../services/Aluno/AlunoAddService'

export default class AlunoController {
  public async all(req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
    try {
      const alunoService = new AlunoAllService()
      return res.send(await alunoService.all())
    } catch (error) {
      next(error)
    }
  }

  public async findAluno(req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
    try {
      const alunoService = new AlunoFindService()
      return res.send(await alunoService.findAlunoById(req.params.id))
    } catch (error) {
      next(error)
    }
  }

  public async add(req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
    try {
      const alunoService = new AlunoAddService()
      return res.send(await alunoService.add(req.body))
    } catch (error) {
      next(error)
    }
  }

}