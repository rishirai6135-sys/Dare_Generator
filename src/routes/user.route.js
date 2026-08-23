import { Router } from "express";
import userControllers from "../controllers/user.controller.js"

const userRoutes = Router();

userRoutes.get("", userControllers.getLogin)
userRoutes.get("/register", userControllers.getRegister)
userRoutes.get("/reset", userControllers.getReset)

export default userRoutes
