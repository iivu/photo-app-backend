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
  if (error.message) console.log(error.message);
  let statusCode: number, message: string;
  switch (error.message) {
    case 'UNAUTHORIZED':
      statusCode = 401;
      message = '请先登录';
      break;
    default:
      statusCode = 500;
      message = error.message || 'Server has some problems...';
      break
  }
  res.status(statusCode).send({ message });
};
