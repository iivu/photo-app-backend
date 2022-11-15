import express from 'express';

import * as authController from './auth.controller';
import { validateLoginData, authGuard } from './auth.middleware';

const router = express.Router();

router.post('/login', validateLoginData, authController.login);

router.post('/auth/validate', authGuard, authController.validate);

export { router as authRouter };
