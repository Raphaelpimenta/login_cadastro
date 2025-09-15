import { Request, Response } from "express";
import { loginService } from "../services/login-services";

export const loginController = async (req: Request, res: Response) => {
    
    const login = await loginService(req, res)

    res.status(200).json({message: "Login efetuado com sucesso!"})
    

    return login
}