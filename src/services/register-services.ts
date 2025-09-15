import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { users } from "../repositories/user-repository";


export const registerServices = async (req: Request, res: Response) => {
    // Regra de negócio
    const { email, password } = req.body;

    //Verificação de email e senha
    if (!email || !password) {
        return res.status(409).json({ message: "Email e password são obrigatórios" });
    }

    //Verificação de usuário existente
    const userExists = users.find(user => user.email === email);

    if (userExists) {
        return res.status(400).json({ message: "Usuário já existe" });
    }

    //Criptografando senha
    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = { id: Date.now(), email, password: hashedPassword}

    return users.push(newUser)
}