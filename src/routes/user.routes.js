import { Router } from "express";
import { showLoginPage, registerUser } from "../controllers/user.controllers.js";

const router = Router();

router.get("/", showLoginPage);
router.post("/", registerUser);

export default router;