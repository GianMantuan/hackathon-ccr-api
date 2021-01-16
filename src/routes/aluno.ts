import {Router} from 'express'

import AlunoController from '../controllers/AlunoController'

const router = Router()

const alunoController = new AlunoController()

router.get('/', alunoController.all)
router.get('/:id', alunoController.findAluno)
router.post('/', alunoController.add)

export default router;