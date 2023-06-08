import { Request, Response, NextFunction } from 'express';

export const asyncWrapper =
  <T>(fn: (req: Request, res: Response, next: NextFunction) => Promise<T>) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await fn(req, res, next);
    } catch (err) {
      next(err);
    }
  };
