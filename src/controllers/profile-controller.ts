import { Request, Response } from "express";

export const profileController = async (req: Request, res: Response) => {
    
    return res.json({ message: "Perfil acessado com sucesso!", user: req.user })
}