import { Request, Response } from "express";
import { registerServices } from "../services/register-services";

export const registerController = async (req: Request, res: Response) => {
    
    const register = await registerServices(req, res)

    res.status(201).json({ message: "Usuário criado!" })

    return register
}

