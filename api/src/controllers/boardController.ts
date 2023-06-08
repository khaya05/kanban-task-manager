import { Request, Response, NextFunction } from 'express';
import Board, { IBoard } from '../models/boardModel';

export const getAllBoards = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const boards: IBoard[] = await Board.find();

    res.status(200).json({ status: 'success', boards });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: 'Failed to get document',
      error: err.message,
    });
  }
};

export const getBoard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id: string = req.params.boardId;
    const board: IBoard | null = await Board.findById(id);

    // check if user exists
    if (!board) {
      return res
        .status(404)
        .json({ status: 'fail', message: 'User not found' });
    }

    res.status(200).json({ status: 'success', board });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: 'Failed to get document',
      error: err.message,
    });
  }
};

export const createBoard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { name, userId } = req.body;

    if (!name || !userId) {
      return res
        .status(400)
        .json({ status: 'fail', message: 'User name and Id cannot be empty' });
    }

    const board: IBoard = await Board.create(req.body);

    res.status(201).json({ status: 'success', board });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: 'Failed to create document',
      error: err.message,
    });
  }
};

export const updateBoard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id: string = req.params.boardId;
    const board: IBoard | null = await Board.findByIdAndUpdate(id, req.body, {
      runValidators: true,
    });

    // check if user exists
    if (!board) {
      return res
        .status(404)
        .json({ status: 'fail', message: 'User not found' });
    }

    res.status(200).json({ status: 'success', board });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: 'Failed to create document',
      error: err.message,
    });
  }
};

export const deleteBoard = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const id: string = req.params.boardId;
    const board: IBoard | null = await Board.findByIdAndDelete(id);

    // check if user exists
    if (!board) {
      return res
        .status(404)
        .json({ status: 'fail', message: 'User not found' });
    }

    res.status(200).json({ status: 'success', board });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: 'Failed to create document',
      error: err.message,
    });
  }
};
