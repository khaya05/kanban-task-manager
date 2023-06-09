import { NextFunction, Request, Response } from 'express';
import CustomError from './appError';

const errorHandlerMiddleware = (
  err: Error | CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({ message: err.message });
  }
  return res
    .status(500)
    .json({ message: 'Something went wrong, please try again!' });
};

export default errorHandlerMiddleware;
