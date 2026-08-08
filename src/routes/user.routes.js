import { Router } from "express";
import { showLoginPage, registerUser , showRegisterPage} from "../controllers/user.controllers.js";

const router = Router();

router.get("/", showLoginPage);
router.post("/", registerUser);
router.get("/register", showRegisterPage)
router.post("/register", showRegisterPage)
export default router;