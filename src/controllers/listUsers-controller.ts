import { Request, Response } from "express";
import { listUserService } from "../services/listUsers-services";

export const listUsersController = async (req: Request, res: Response) => {
    const listUsers = await listUserService()
    
    return res.status(200).json(listUsers)

}