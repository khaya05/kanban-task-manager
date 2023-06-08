import { Request, Response, NextFunction } from 'express';
import User, { IUser } from '../models/userModel';
import { asyncWrapper } from '../utils/asyncWrapper';
import AppError from '../utils/appError';

export const createUser = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { password, confirmPassword } = req.body;

    // Check if the password and confirmPassword match
    if (password !== confirmPassword) {
      return next(new AppError(400, 'Passwords do not match!'));
    }

    // Create a new user object
    const newUser: IUser = new User(req.body);

    // Save the user to the database
    const savedUser = await newUser.save();

    // Return the saved user object as the response
    res.status(201).json(savedUser);
  }
);
