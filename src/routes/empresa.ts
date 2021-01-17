import {Router} from 'express';

import EmpresaController from '../controllers/EmpresaController';

const router = Router();

const empresaController = new EmpresaController();

router.get('/', empresaController.all);
router.post('/', empresaController.add);
router.put("/:id",empresaController.update);
router.delete("/:id", empresaController.delete);
router.get('/:id', empresaController.findEmpresa);

export default router;