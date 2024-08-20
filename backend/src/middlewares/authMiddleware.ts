import { NextFunction, Request, Response } from 'express'
import jwt, { JwtPayload} from 'jsonwebtoken'

export const authMiddleware = (req:Request, res:Response, next:NextFunction) => {
    // get auth token form header if exists
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
        res.status(401).json({
            msg: "unauthorized"
        })
        return;
    }

    const token = authHeader.split(' ')[1];

    if (!token) {
        res.status(401).json({
            msg: "unauthorized"
        })
        return;
    }

    // verify token and call next if not then return
    try {
        const verified = <JwtPayload>jwt.verify(token, process.env.JWT_SECRET as string);

        if (!verified.userId) {
            res.status(403).json({
                msg: "forbidden"
            })
            return;
        }

        res.locals.userId = verified.userId;
        next();

    } catch (error) {
        res.status(403).json({
            msg: "forbidden"
        })
        return;
    }

}