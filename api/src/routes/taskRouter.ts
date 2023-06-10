import {
  createTask,
  deleteTask,
  getAllTasks,
  getTask,
  updateTask,
} from '../controllers/taskController';
import express from 'express';

const router = express.Router();

router.route('/').get(getAllTasks).post(createTask);

router
  .route('/:TaskId')
  .get(getTask)
  .patch(updateTask)
  .delete(deleteTask);

export default router;
