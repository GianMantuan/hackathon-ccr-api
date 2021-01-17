import { Request, Response, NextFunction } from 'express';

import EmpresaAllService from '../services/Empresa/EmpresaAllService'
import EmpresaFindService from '../services/Empresa/EmpresaFindService'
import EmpresaAddService from '../services/Empresa/EmpresaAddService'
import EmpresaDeleteService from '../services/Empresa/EmpresaDeleteService';
import EmpresaUpdateService from '../services/Empresa/EmpresaUpdateService';

export default class EmpresaController {
  public async all(req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
    try {
      const empresaService = new EmpresaAllService()
      return res.send(await empresaService.all())
    } catch (error) {
      next(error)
    }
  }

  public async findEmpresa(req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
    try {
      const empresaService = new EmpresaFindService()
      return res.send(await empresaService.findEmpresaById(req.params.id))
    } catch (error) {
      next(error)
    }
  }

  public async add(req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
    try {
      const empresaService = new EmpresaAddService()
      return res.send(await empresaService.add(req.body))
    } catch (error) {
      next(error)
    }
  }

  public async delete(req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
    try {
      const empresaService = new EmpresaDeleteService()
      return res.send(await empresaService.delete(req.body))
    } catch (error) {
      next(error)
    }
  }

  public async update(req: Request, res: Response, next: NextFunction): Promise<Response | undefined> {
    try {
      const empresaService = new EmpresaUpdateService()
      return res.send(await empresaService.update(req.params.id, req.body))
    } catch (error) {
      next(error)
    }
  }
}