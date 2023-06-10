import {
  createColumn,
  deleteColumn,
  getAllColumns,
  getColumn,
  updateColumn,
} from '../controllers/columnController';
import express from 'express';

const router = express.Router();

router.route('/').get(getAllColumns).post(createColumn);

router.route('/:ColumnId').get(getColumn).patch(updateColumn).delete(deleteColumn);

export default router;
