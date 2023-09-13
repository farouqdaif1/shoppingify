import express from 'express';
const router = express.Router();
import { signIn, signupUser, getUser } from '../controllers/user';
import { requireAuth } from "../middlewares/requireAuth"
router.post('/signIn', signIn);
router.post('/signUp', signupUser);
router.use(requireAuth);
router.post('/:id', getUser);
export default router;