import { Router } from 'express'
import userRouter from './userRouter';

const mainRouter = Router();


mainRouter.use('/user', userRouter);    // http://localhost:3000/api/v1/user

export default mainRouter;