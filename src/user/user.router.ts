import express from 'express';

import * as userController from './user.controller';
import { validateUserData } from './user.middleware';

const router = express.Router();

router.post('/users', validateUserData, userController.create);

export { router as userRouter };
