import bcrypt from 'bcrypt';
import type { Request, Response, NextFunction } from 'express';

import * as userService from './user.service';

export const validateUserData = async (req: Request, res: Response, next: NextFunction) => {
  const { name, password } = req.body;
  if (!name) return next(new Error('Name is required!'));
  if (!password) return next(new Error('Password is required!'));

  const user = await userService.getUserByName(name);
  if (user) return next(new Error('User already exist!'));

  next();
};

export const hashUserPassword = async (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  req.body.password = await bcrypt.hash(password, 10);
  next();
};
