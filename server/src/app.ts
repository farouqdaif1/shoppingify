import 'dotenv/config';
import express from 'express';
import userRouter from './routes/user';
// import userModel from './models/user';
const app = express();
app.use(express.json());

// app.get('/', async (req, res) => {
//     const user = await userModel.find().exec();
//     res.status(200).json(user);
// })
app.use('/api/user', userRouter)
export default app;