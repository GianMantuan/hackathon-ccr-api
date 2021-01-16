import {Router} from 'express'

import aluno from './aluno'
import blog from './blog'
import empresa from './empresa'

const routes = Router()

routes.use('/aluno', aluno)
routes.use('/blog', blog)
routes.use('/empresa', empresa)

export default routes