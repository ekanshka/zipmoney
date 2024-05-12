import { Request, Response } from "express"
import { signinSchema, signupSchema } from "../types"
import { Account, User } from "../db";
import { compareSync, hashSync } from "bcryptjs";
import jwt from 'jsonwebtoken'


export const signup = async (req:Request, res:Response) => {
    // zod validation of req.body
    const { success } = signupSchema.safeParse(req.body);

    if (!success) {
        res.status(400).json({ msg: "incorrect inputs" });
        return;
    }

    const { username, firstName, lastName, password} = req.body;

    
    try {
        // checking for existing user
        const existingUser = await User.findOne({username: username});
    
        if (existingUser) {
            res.status(422).json({
                msg: "user already exists"
            })
            return;
        }

        // storing in mdb
        const hashedPassword = hashSync(password, 10);
        const user = await User.create({
            username, firstName, lastName, password: hashedPassword
        })

        const userId = user._id;

        await Account.create({
            userId: userId,
            balance: 1 + Math.random() * 10000
        })

        res.json({
            msg: "user created successfully"
        })

        return

    } catch (error) {
        console.log("I'm the error that might have happened when checking for existing user or: ", error);
        return;
    }

}

export const signin = async (req:Request, res:Response) => {

    // zod validation
    const { success } = signinSchema.safeParse(req.body);

    if (!success) {
        res.status(400).json({ msg: "incorrect inputs "});
        return;
    }

    const { username, password } = req.body;
    // check if correct password as stored in mdb/legit user
    try {
        const user = await User.findOne({username});

        if (!user) {                // no user found
            res.status(422).json({
                msg: "no such user found"
            })
            return;
        }

        const correctPass = compareSync(password, user.password);

        if (!correctPass) {         // not correct password
            res.status(422).json({
                msg: "incorrect password"
            })
            return;
        }


        // if correct password, return jwt token
        const { _id } = user;
        const token = jwt.sign({userId: _id}, process.env.JWT_SECRET as string)

        res.json({
            msg: "signin successfull",
            token: token
        })


    } catch (error) {
        console.log("im the error when checking for legit user or: ", error)
        return;
    }


    // if legit then give them a jwt token back
}