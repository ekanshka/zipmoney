import { Request, Response } from 'express'
import { Account } from '../db'


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

}