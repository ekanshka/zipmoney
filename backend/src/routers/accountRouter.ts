import { Router } from 'express'
import { balance, transfer } from '../controllers/accountController';
import { authMiddleware } from '../middlewares/authMiddleware';

const accountRouter = Router()

accountRouter.get('/balance', authMiddleware, balance);             //*  http://localhost:3000/api/v1/account/balance
accountRouter.post('/transfer', authMiddleware, transfer);          //*  http://localhost:3000/api/v1/account/transfer


export default accountRouter;