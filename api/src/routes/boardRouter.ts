import {
  createBoard,
  deleteBoard,
  getAllBoards,
  getBoard,
  updateBoard,
} from '../controllers/boardController';
import express from 'express';

const router = express.Router();

router.route('/').get(getAllBoards).post(createBoard);

router.route('/:boardId').get(getBoard).patch(updateBoard).delete(deleteBoard);

export default router;
