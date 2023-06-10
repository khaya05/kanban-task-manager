import Task from '../models/taskModel';
import {
  createOne,
  deleteOne,
  getAllDocs,
  getOne,
  updateOne,
} from './globalCrudController';

export const getAllTasks = getAllDocs(Task);
export const getTask = getOne(Task);
export const createTask = createOne(Task);
export const updateTask = updateOne(Task);
export const deleteTask = deleteOne(Task);
