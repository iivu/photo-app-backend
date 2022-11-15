import type { Request, Response, NextFunction } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import * as userService from '../user/user.service';
import { PUBLIC_KEY } from '../app/app.config';
import type { TokenPayload } from './auth.interface';

// 验证用户登录信息
export const validateLoginData = async (req: Request, res: Response, next: NextFunction) => {
  const { name, password } = req.body;
  if (!name) return next(new Error('Name is required!'));
  if (!password) return next(new Error('Password is required!'));

  const user = await userService.getUserByName(name, { password: true });
  if (!user) return next(new Error('User does not exist!'));

  const passwordMatched = await bcrypt.compare(password, user.password);
  if (!passwordMatched) return next(new Error('Password does not match!'));

  // 把user挂到body上，供后面的中间件使用
  req.body.user = user;

  next();
};

// 验证用户身份
export const authGuard = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const authorization = req.header('Authorization');
    if (!authorization) throw new Error();
    // 提取token
    const token = authorization.replace('Bearer ', '');
    if (!token) throw new Error();
    // 验证token
    const decoded = jwt.verify(token, PUBLIC_KEY, { algorithms: ['RS256'] });
    req.user = decoded as TokenPayload;
    next();
  } catch (err) {
    next(new Error('UNAUTHORIZED'));
  }
};
