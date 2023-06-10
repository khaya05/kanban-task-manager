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

export const updateOne = (Model: Model<any>) =>
  asyncWrapper(async (req: Request, res: Response, next: NextFunction) => {
    const id: string = req.params.userId;
    const doc = await Model.findByIdAndUpdate(id, req.body, {
      runValidators: true,
    });

    if (!doc) {
      return createCustomError(404, 'Document not found');
    }

    res.status(200).json({ status: 'success', doc });
  });

export const getOne = (Model: Model<any>) =>
  asyncWrapper(async (req: Request, res: Response, next: NextFunction) => {
    const id: string = req.params.userId;
    const doc = await Model.findById(id);

    if (!doc) {
      return createCustomError(404, 'Document not found');
    }

    res.status(200).json({ status: 'success', doc });
  });

export const getAllDocs = (Model: Model<any>) =>
  asyncWrapper(async (req: Request, res: Response, next: NextFunction) => {
    const docs = await Model.find();

    res.status(200).json({ status: 'success', docs });
  });


export const createOne = (Model: Model<any>) => {
  return asyncWrapper(
    async (req: Request, res: Response, next: NextFunction) => {
      const doc = await Model.create(req.body);
      res.status(201).json({ status: 'success', doc });
    }
  );
};

