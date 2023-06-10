import Task from '../models/taskModel';
import {
  createOne,
  deleteOne,
  getAllDocs,
  getOne,
  updateOne,
} from './globalCrudController';

export const getAllTasks = getAllDocs(Task);
export const getTasks = getOne(Task);
export const createTasks = createOne(Task);
export const updateTasks = updateOne(Task);
export const deleteTasks = deleteOne(Task);
