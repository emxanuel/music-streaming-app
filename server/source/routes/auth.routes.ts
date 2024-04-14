import { Router } from "express";
import { login } from "../middlewares/auth.middlewares";
const authRoutes = Router()

authRoutes.post('/login', login)

export default authRoutes