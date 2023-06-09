import { NextFunction, Request, Response } from 'express';
import { createCustomError } from '../error/appError';

const notFound = (req: Request, res: Response, next: NextFunction) => {
  const msg: string = `Can't find ${req.originalUrl} on this server`;
  next(createCustomError(404, msg));
};

export default notFound;
