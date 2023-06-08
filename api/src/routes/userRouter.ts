import {
  createUser,
  deleteUser,
  getAllUsers,
  getUser,
  updateUser,
} from '../controllers/userController';
import express from 'express';

const router = express.Router();

router.route('/signup').post(createUser);

router.route('/').get(getAllUsers);
router.route('/:userId').get(getUser).patch(updateUser).delete(deleteUser);

export default router;
