import { NextFunction, Request, Response } from 'express';
import { createCustomError } from '../error/appError';

const notFound = (req: Request, res: Response, next: NextFunction) => {
  const msg: string = `Can't find ${req.originalUrl} on this server`;
  return next(createCustomError(404, msg, 'fail'));
};

export default notFound;
