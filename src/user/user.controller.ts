import type { Request, Response, NextFunction } from 'express';

import { UserModel } from './user.model';
import * as userService from './user.service';

/**
 * Create user
 */

export const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, password } = req.body;
    const data = await userService.createUser({ name, password });
    res.status(200).send(data);
  } catch (err) {
    next(err);
  }
};
