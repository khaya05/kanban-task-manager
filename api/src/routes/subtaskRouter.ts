import {
  createSubtask,
  deleteSubtask,
  getAllSubtasks,
  getSubtask,
  updateSubtask,
} from '../controllers/subtaskController';
import express from 'express';

const router = express.Router();

router.route('/').get(getAllSubtasks).post(createSubtask);

router
  .route('/:SubtaskId')
  .get(getSubtask)
  .patch(updateSubtask)
  .delete(deleteSubtask);

export default router;
