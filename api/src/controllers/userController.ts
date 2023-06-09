import { Request, Response, NextFunction } from 'express';
import User, { IUser } from '../models/userModel';
import asyncWrapper from '../middleware/asyncWrapper';
import AppError, { createCustomError } from '../error/appError';

export const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const users: IUser[] = await User.find();

    res.status(200).json({ status: 'success', users });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: 'Failed to get document',
      error: err.message,
    });
  }
};

export const getUser = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const id: string = req.params.userId;
    const user: IUser | null = await User.findById(id);

    // check if user exists
    if (!user) {
      return createCustomError(404, 'User not found');
    }

    res.status(200).json({ status: 'success', user });
  }
);

export const createUser = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { password, confirmPassword } = req.body;
    if (password !== confirmPassword) {
      return createCustomError(402, 'Passwords do not match');
    }
    const user: IUser = await User.create(req.body);

    res.status(201).json({ status: 'success', user });
  }
);

export const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id: string = req.params.userId;
    const user: IUser | null = await User.findByIdAndUpdate(id, req.body, {
      runValidators: true,
    });

    // check if user exists
    if (!user) {
      return res
        .status(404)
        .json({ status: 'fail', message: 'User not found' });
    }

    res.status(200).json({ status: 'success', user });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: 'Failed to create document',
      error: err.message,
    });
  }
};

export const deleteUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id: string = req.params.userId;
    const user: IUser | null = await User.findByIdAndDelete(id);

    // check if user exists
    if (!user) {
      return res
        .status(404)
        .json({ status: 'fail', message: 'User not found' });
    }

    res.status(204);
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: 'Failed to create document',
      error: err.message,
    });
  }
};
