import Column from '../models/columnModel';
import {
  createOne,
  deleteOne,
  getAllDocs,
  getOne,
  updateOne,
} from './globalCrudController';

export const getAllColumns= getAllDocs(Column);
export const getColumn = getOne(Column);
export const createColumn = createOne(Column);
export const updateColumn = updateOne(Column);
export const deleteColumn = deleteOne(Column);
