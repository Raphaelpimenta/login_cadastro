import { Request, Response } from "express";
import { users } from "../repositories/user-repository";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const loginService = async (req: Request, res: Response) => {
    const { email, password } = req.body

    //Verificação de usuário existente
    const user = users.find(u => u.email === email)

    if(!user) {
        return res.status(404).json({message: "Usuário não encontrado!"})
    }

    //Validação de senha
    const validPassword = await bcrypt.compare(password, user?.password)

    if(!validPassword) {
        return res.status(401).json({ message: "Senha inválida"})
    }

    //Token
    const token = jwt.sign({id: user.id, email: user.email}, "secreta123", {expiresIn: "1h"})

    return res.json({ token })

}
