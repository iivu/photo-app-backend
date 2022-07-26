import express from 'express';

import * as userController from './user.controller';

const router = express.Router();

router.post('/users', userController.create);

export { router as userRouter };
