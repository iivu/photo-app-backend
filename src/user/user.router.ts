import express from 'express';

import * as userController from './user.controller';
import { validateUserData, hashUserPassword } from './user.middleware';

const router = express.Router();

router.post('/users', validateUserData, hashUserPassword, userController.create);

export { router as userRouter };
