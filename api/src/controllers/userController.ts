import User from '../models/userModel';
import {
  createOne,
  deleteOne,
  getAllDocs,
  getOne,
  updateOne,
} from './globalCrudController';

export const getAllUsers = getAllDocs(User);
export const getUser = getOne(User);
export const createUser = createOne(User);
export const updateUser = updateOne(User);
export const deleteUser = deleteOne(User);
