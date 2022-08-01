import bcrypt from 'bcrypt'
import type { Request, Response, NextFunction } from 'express';

import * as userService from '../user/user.service';

export const validateLoginData = async (req: Request, res: Response, next: NextFunction) => {
  const { name, password } = req.body;
  if (!name) return next(new Error('Name is required!'));
  if (!password) return next(new Error('Password is required!'));

  const user = await userService.getUserByName(name, { password: true });
  if (!user) return next(new Error('User does not exist!'));

  const passwordMatched = await bcrypt.compare(password,user.password);
  if(!passwordMatched) return next(new Error('Password does not match!'))

  next();
};
