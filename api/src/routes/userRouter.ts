import { createUser } from '../controllers/userController';
import express from 'express';

const router = express.Router();

router.route('/signup').post(createUser);

export default router;
