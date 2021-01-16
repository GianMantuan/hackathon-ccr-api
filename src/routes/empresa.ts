import {Router} from 'express'

import EmpresaController from '../controllers/EmpresaController'

const router = Router()

const empresaController = new EmpresaController()

router.get('/', empresaController.all)
router.get('/:id', empresaController.findEmpresa)
router.post('/', empresaController.add)

export default router;