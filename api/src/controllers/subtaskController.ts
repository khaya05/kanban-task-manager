import Subtask from '../models/subtaskModel';
import {
  createOne,
  deleteOne,
  getAllDocs,
  getOne,
  updateOne,
} from './globalCrudController';

export const getAllSubtasks = getAllDocs(Subtask);
export const getSubtasks = getOne(Subtask);
export const createSubtasks = createOne(Subtask);
export const updateSubtasks = updateOne(Subtask);
export const deleteSubtasks = deleteOne(Subtask);
