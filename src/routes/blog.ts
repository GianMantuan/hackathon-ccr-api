import {Router} from 'express';

import BlogController from '../controllers/BlogController';

const router = Router();

const blogController = new BlogController()

router.get('/', blogController.all);
router.get('/:id', blogController.findBlog);
router.post('/', blogController.add);
router.put("/:id",blogController.update);
router.delete("/:id",blogController.delete);

export default router;