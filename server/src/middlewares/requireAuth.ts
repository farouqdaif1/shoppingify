import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { env } from "../util/validateEnv";
import User from "../models/user";
interface CustomRequest extends Request {
    user: JwtPayload | string
}
interface Id {
    _id: JwtPayload | string
}
export const requireAuth = async (req: Request, res: Response, next: NextFunction) => {
    const { authorization } = req.headers
    if (!authorization) {
        return res.status(401).json({ error: "Authorization token is required " });
    }
    const token = authorization.split(" ")[1];
    try {
        const { _id } = jwt.verify(token, env.SECRET_KEY) as Id;
        (req as CustomRequest).user = await User.findOne({ _id }).select('_id');

        next()
    } catch (error) {
        console.error(error);
        res.status(401).json({ error: 'Request is not authorized' })
    }
}