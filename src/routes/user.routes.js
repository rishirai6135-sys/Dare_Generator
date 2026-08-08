import { Router } from "express";
import userController from "../controllers/user.controllers.js";

const router = Router();

router.get("/", userController.showLoginPage);
router.post("/", userController.loginUser);

router.get("/register", userController.showRegisterPage)
router.post("/register", userController.registerUser)


export default router;