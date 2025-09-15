import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { TokenPayload } from "../models/tokenPayload";


export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {

    const authHeader = req.headers.authorization

    //Verificação de token
    if (!authHeader) {

        return res.status(401).json({ message: "Token não fornecido" })

    }

    const [, token] = authHeader.split(" ")

    try {
        const decoded = jwt.verify(token, "secreta123") as TokenPayload
        req.user = { id: decoded.id, email: decoded.email } // adiciona user no req
        return next()
    } catch (err) {
        return res.status(401).json({ message: "Token inválido ou expirado" })
    }


}