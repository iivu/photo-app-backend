import type { Request, Response, NextFunction } from 'express';

import { signToken } from './auth.service';

export const login = async (req: Request, res: Response, next: NextFunction) => {
  const {
    user: { id, name },
  } = req.body;
  try {
    const payload = { id, name };
    const token = signToken({ payload });
    res.send({ id, name, token });
  } catch (e) {
    next(e);
  }
};

export const validate = async (req: Request, res: Response, next: NextFunction) => {
  res.sendStatus(200);
};
