import { Router } from 'express'
import { signin, signup } from '../controllers/authController';
import { authMiddleware } from '../middlewares/authMiddleware';
import { findUsers, updateUser, getUser, deleteUser } from '../controllers/userController';

const userRouter = Router();


userRouter.post('/signup', signup)                          //*  http://localhost:3000/api/v1/user/signup
userRouter.post('/signin', signin)                          //*  http://localhost:3000/api/v1/user/signin
userRouter.get('/', authMiddleware, getUser)                //*  http://localhost:3000/api/v1/user/
userRouter.post('/', authMiddleware, deleteUser)            //*  http://localhost:3000/api/v1/user/
userRouter.put('/', authMiddleware, updateUser)             //*  http://localhost:3000/api/v1/user/
userRouter.get('/bulk', authMiddleware, findUsers)          //*  http://localhost:3000/api/v1/user/bulk

export default userRouter

