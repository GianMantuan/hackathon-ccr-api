import { Request, Response, NextFunction } from 'express';

import AlunoAddService from '../services/Aluno/AlunoAddService';
import AlunoAllService from '../services/Aluno/AlunoAllService';
import AlunoFindService from '../services/Aluno/AlunoFindService';
import AlunoDeleteService from '../services/Aluno/AlunoDeleteService';
import AlunoUpdateService from '../services/Aluno/AlunoUpdateService';

export default class AlunoController {
  public async all(req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
    try {
      const alunoService = new AlunoAllService();
      return res.send(await alunoService.all());
    } catch (error) {
      next(error);
    }
  }

  public async findAluno(req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
    try {
      const alunoService = new AlunoFindService();
      return res.send(await alunoService.findAlunoById(req.params.id));
    } catch (error) {
      res.status(500).send(error)
      next(error);
    }
  }

  public async add(req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
    try {
      const alunoService = new AlunoAddService();
      return res.send(await alunoService.add(req.body));
    } catch (error) {
      next(error);
    }
  }

  public async delete(req: Request, res: Response, next: NextFunction): Promise<Response | undefined>{
   try {
      const alunoService = new AlunoDeleteService();
      return res.send(await alunoService.delete(req.params.id));
   } catch (error) {
      next(error);
   } 
  }

  public async update(req: Request, res: Response, next: NextFunction): Promise<Response | undefined>{
    try {
      const alunoService = new AlunoUpdateService();
      return res.send(await alunoService.update(req.params.id,req.body));
    } catch (error) {
      res.status(500).send(error)
      next(error);
    }
  }

}