import express from 'express';
const router = express.Router();
import { signIn, signupUser } from '../controllers/user';
router.post('/signIn', signIn);
router.post('/signUp', signupUser);
export default router;