import { Request, Response } from 'express'
import { Account } from '../db'
import mongoose from 'mongoose';
import { transferSchema } from '../types';


export const balance = async (req: Request, res: Response) => {

    try {
        const account = await Account.findOne({userId : res.locals.userId});

        if (!account) {
            res.json({
                msg: "please recreate your account"
            })
            return
        }

        res.json({
            balance: account.balance
        })

    } catch (error) {
        console.log("im the error at fetching user balance from accounts or : ", error)
        return;
    }
}

export const transfer = async (req: Request, res: Response) => {
    
    const parsedBody = transferSchema.safeParse(req.body);

    if (!parsedBody.success) {
        res.json({
            msg: "invalid inputs"
        })
        return
    }

    const { to, amount } = parsedBody.data;

    try {
        
        // 1. make a session
        const session = await mongoose.startSession();
        
        // 2. use session to start transaction
        session.startTransaction();

        // 3. find sender's acc with session
        const sender = await Account.findOne({ userId: res.locals.userId });

        // 4. first abort checks for sender if no sender account or insufficient balance 
        if (!sender) {
            session.abortTransaction();
            res.json({ msg: "no sender account found" })
            return;
        }


        if (sender.balance < amount) {
            session.abortTransaction();
            res.json({ msg: "insufficient balance" })
            return;
        }

        // 5. find reciever's acc with session
        const reciever = await Account.findOne({ userId: to})

        // 6. second abort check if no valid found reciever
        if (!reciever) {
            session.abortTransaction();
            res.json({ msg: "no reciever with such id found"});
            return;
        }

        // 7. if all goes right perform both the transaction to both accs with the session
        await Account.updateOne({userId: sender.userId},{ $inc: {balance: -amount} });
        await Account.updateOne({userId: reciever.userId},{ $inc: {balance: amount} });

        // 8. commit transaction on session
        session.commitTransaction();
        res.json({
            msg: "Transaction successfull"
        })

        
    } catch (error) {

        res.json({
            msg: "session transaction failed"
        })
        return
    }


    
}