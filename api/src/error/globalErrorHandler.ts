import { NextFunction, Request, Response } from 'express';
import CustomError, { createCustomError } from './appError';

// Error handling for development environment
const sendErrorDetailsInDev = (err: CustomError, res: Response) => {
  res.status(err.statusCode).json({
    status: err.status,
    error: err,
    message: err.message,
    stack: err.stack,
  });
};

// Error handling for production environment
const sendErrorDetailsInProd = (err: CustomError, res: Response) => {
  if (err.isOperational) {
    res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  } else {
    console.error('Error', err);
    res.status(500).json({
      status: 'error',
      message: 'Something went wrong',
    });
  }
};

const handleCastError = (err: any) => {
  const message: string = `Invalid ${err.path}: ${err.value}`;
  return createCustomError(400, message);
};

const handleDuplicateFields = (err: any) => {
  const value = `${err.keyValue}`;
  const message: string = `Duplicate field value ${value}, please use another value`;
  return createCustomError(400, message);
};

// const handleValidationError = (err: any) => {
//   const errors: string[] = Object.values(err.errors).map(el:any => el.message)
//   const message: string = `Invalid input data. ${errors.join(', ')}`;
//   return createCustomError(400, message);
// };

export const globalErrorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  if (process.env.NODE_ENV === 'development') {
    sendErrorDetailsInDev(err, res);
  } else {
    let error = { ...err };

    if (error.name == 'CastError') {
      error = handleCastError(error);
    }

    if (error.code === 11000) {
      error = handleDuplicateFields(error);
    }

    // if (error.name === 'ValidationError') {
    //   error = handleValidationError(error);
    // }
    sendErrorDetailsInProd(error, res);
  }
  next()
};

export default globalErrorHandler;
