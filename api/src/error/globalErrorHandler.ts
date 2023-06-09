import { NextFunction, Request, Response } from 'express';
import CustomError from './appError';

// send more details about error in development
const handleErrorInDev = (err: CustomError, res: Response) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

// send less details about error in production
const handleErrorInProd = (err: CustomError, res: Response) => {
  // operational, trusted error: send message to client
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
    // Programming or other unknown error: don't leak error details
  } else {
    // 1. log error
    console.error('Error', err);

    // 2. send generic message
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong'
    });
  }
};

export const globalErrorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    handleErrorInDev(err, res);
  } else {
    handleErrorInProd(err, res);
  }
};

export default globalErrorHandler;
