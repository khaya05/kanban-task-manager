import Column from '../models/columnModel';
import {
  createOne,
  deleteOne,
  getAllDocs,
  getOne,
  updateOne,
} from './globalCrudController';

export const getAllColumns= getAllDocs(Column);
export const getColumns = getOne(Column);
export const createColumns = createOne(Column);
export const updateColumns = updateOne(Column);
export const deleteColumns = deleteOne(Column);
