import { Request, Response } from "express"
import { signinSchema, signupSchema } from "../types"
import { User } from "../db";
import { hashSync } from "bcryptjs";


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
        await User.create({
            username, firstName, lastName, password: hashedPassword
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

    }

    //

}