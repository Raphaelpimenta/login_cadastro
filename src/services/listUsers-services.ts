import { Users } from "../models/users-model";
import { users } from "../repositories/user-repository";

export const listUserService = async (): Promise<Users[]> => {
    return users
}