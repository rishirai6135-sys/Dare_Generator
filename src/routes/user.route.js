import { Router } from "express";
import userControllers from "../controllers/user.controller.js"
const userRoutes = Router();

userRoutes.get("/login", userControllers.getLogin)

export default userRoutes