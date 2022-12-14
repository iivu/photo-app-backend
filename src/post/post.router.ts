import express from 'express';

import * as postController from './post.controller';
import { authGuard } from '../auth/auth.middleware';

const router = express.Router();

/**
 * Post router
 */
router.get('/posts', postController.index);
router.post('/posts', authGuard, postController.store);
router.patch('/posts/:postId', postController.update);
router.delete('/posts/:postId', postController.destroy);

export { router as postRouter };
