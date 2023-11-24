import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/user";
import { env } from "../util/validateEnv";
import mongoose from "mongoose";
const createToken = (id: string) => {
    return jwt.sign({ id }, env.SECRET_KEY, { expiresIn: '3d' })
}

// login
export const signIn = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const user = await User.login(email, password)
        const token = createToken(user._id)
        res.status(200).json({ email, token })

    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message })
        } else {
            res.status(400).json({ "Unexpected error": error })

        }
    }
}
//signup
export const signupUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const user = await User.signup(email, password)
        const token = createToken(user._id)
        res.status(200).json({ email, token })

    } catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message })
        } else {
            res.status(400).json({ "Unexpected error": error })

        }
    }
}
//user details
export const getUser = async (req: Request, res: Response) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such user' })
    }
    const user = await User.findById(id);
    if (!user) {
        return res.status(404).json({ error: 'No such user' })
    }
    res.status(200).json(user)

}