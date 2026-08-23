import { Router } from "express";
import userControllers from "../controllers/user.controller.js"

const userRoutes = Router();

userRoutes.get("", userControllers.getLogin)
userRoutes.get("/register", userControllers.getRegister)

export default userRoutes