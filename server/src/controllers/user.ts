import { Request, Response } from "express";
import User from "../models/user";
// login
export const signIn = async (req: Request, res: Response) => {
    res.json({ mssg: 'signup user' })
}
//signup
export const signupUser = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        const user = await User.signup(email, password)
        res.status(200).json({ email, user })

    } catch (error) {
        res.status(400).json({ error: error })

    }
}
