import { Router } from "express";
import { registerController } from "./controllers/register-controller";
import { listUsersController } from "./controllers/listUsers-controller";
import { loginController } from "./controllers/login-controller";
import { authMiddleware } from "./middlewares/auth";
import { profileController } from "./controllers/profile-controller";

const router = Router()

router.get('/users', listUsersController)
router.post('/register', registerController)
router.post('/login', loginController)
router.get('/profile', authMiddleware, profileController)

export default router