import { Request, Response, NextFunction } from 'express';

/**
 * log request url
 */
export const requestUrl = (error: any, req: Request, res: Response, next: NextFunction) => {
  console.log(req.url);
  next();
};

/**
 * Default error handler
 */
export const defualtErrorHandler = (
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode: number, message: string;
  switch (error.messgae) {
    default:
      statusCode = 500;
      message = 'Server has some problems...';
  }
  res.status(statusCode).send({ message });
};
