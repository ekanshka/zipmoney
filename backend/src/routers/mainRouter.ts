import { Router } from 'express'
import userRouter from './userRouter';
import accountRouter from './accountRouter';

const mainRouter = Router();


mainRouter.use('/user', userRouter);                //*  http://localhost:3000/api/v1/user
mainRouter.use('/account', accountRouter);          //*  http://localhost:3000/api/v1/account

export default mainRouter;