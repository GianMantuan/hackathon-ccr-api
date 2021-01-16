import {Router} from 'express'

import BlogController from '../controllers/BlogController'

const router = Router()

const blogController = new BlogController()

router.get('/', blogController.all)
router.get('/:id', blogController.findBlog)
router.post('/', blogController.add)

export default router;