import type { Request, Response, NextFunction } from 'express';

export const login = async (req: Request, res: Response, next: NextFunction) => {
  const { name, password } = req.body;
  res.send({message: `Welcom back, ${name}!`})
};
