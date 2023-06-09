import { Request, Response, NextFunction } from 'express';
import Board, { IBoard } from '../models/boardModel';
import asyncWrapper from '../middleware/asyncWrapper';

export const getAllBoards = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const boards: IBoard[] = await Board.find();
    res.status(200).json({ status: 'success', boards });
  }
);

export const getBoard = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const id: string = req.params.boardId;
    const board: IBoard | null = await Board.findById(id);

    // check if user exists
    if (!board) {
      return res
        .status(404)
        .json({ status: 'fail', message: 'User not found' });
    }

    res.status(200).json({ status: 'success', board });
  }
);

export const createBoard = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const { name, userId } = req.body;

    if (!name || !userId) {
      return res
        .status(400)
        .json({ status: 'fail', message: 'User name and Id cannot be empty' });
    }

    const board: IBoard = await Board.create(req.body);
    res.status(201).json({ status: 'success', board });
  }
);

export const updateBoard = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
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
  }
);

export const deleteBoard = asyncWrapper(
  async (req: Request, res: Response, next: NextFunction) => {
    const id: string = req.params.boardId;
    const board: IBoard | null = await Board.findByIdAndDelete(id);

    // check if user exists
    if (!board) {
      return res
        .status(404)
        .json({ status: 'fail', message: 'User not found' });
    }

    res.status(204);
  }
);
