import express from "express";
import { SignUp, Login, Logout } from "../controllers/auth.controllers.js";

const router = express.Router();

router.post("/signup", SignUp )
router.post("/logout", Logout);
router.post("/login", Login);

export default router;