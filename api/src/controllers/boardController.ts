import Board from '../models/boardModel';
import {
  createOne,
  deleteOne,
  getAllDocs,
  getOne,
  updateOne,
} from './globalCrudController';

export const getAllBoards = getAllDocs(Board);
export const getBoard = getOne(Board);
export const createBoard = createOne(Board);
export const updateBoard = updateOne(Board);
export const deleteBoard = deleteOne(Board);
