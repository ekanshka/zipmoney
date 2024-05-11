import { Router } from 'express'
import { signin, signup } from '../controllers/authController';

const userRouter = Router();


userRouter.post('/signup', signup)     //http://localhost:3000/api/v1/user/signup
userRouter.post('/signin', signin)     //http://localhost:3000/api/v1/user/signin
// userRouter.post('/update', )     //http://localhost:3000/api/v1/user/update

export default userRouter