import { Request, Response, NextFunction } from 'express';
import { createCustomError } from '../error/appError';
import asyncWrapper from '../middleware/asyncWrapper';
import { Model } from 'mongoose';

export const deleteOne = (Model: Model<any>) =>
  asyncWrapper(
    async (req: Request, res: Response, next: NextFunction): Promise<void> => {
      const id: string = req.params.userId;
      const doc = await Model.findByIdAndDelete(id);

      if (!doc) {
        const error = createCustomError(404, 'Document not found');
        return next(error);
      }

      res.sendStatus(204);
    }
  );
