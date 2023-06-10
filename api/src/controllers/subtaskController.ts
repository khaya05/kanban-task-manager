import Subtask from '../models/subtaskModel';
import {
  createOne,
  deleteOne,
  getAllDocs,
  getOne,
  updateOne,
} from './globalCrudController';

export const getAllSubtasks = getAllDocs(Subtask);
export const getSubtask = getOne(Subtask);
export const createSubtask = createOne(Subtask);
export const updateSubtask = updateOne(Subtask);
export const deleteSubtask = deleteOne(Subtask);
