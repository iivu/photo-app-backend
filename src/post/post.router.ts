import express from 'express';

import * as postController from './post.controller';

const router = express.Router();

/**
 * Post list
 */
router.get('/posts', postController.index);

export { router as postRouter };
