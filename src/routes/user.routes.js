import { Router } from "express";
import userController from "../controllers/user.controllers.js";

const router = Router();

router.get("/", userController.showLoginPage);
router.post("/", userController.loginUser);

router.get("/register", userController.showRegisterPage)
router.post("/register", userController.registerUser)

router.get("/submit", userController.showSubmitPage)
router.post("/submit", userController.showLoginPage)

router.get("/reset", userController.resetPasswordShow)
export default router;