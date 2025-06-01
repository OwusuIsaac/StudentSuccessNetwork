import express from "express";
import { SignUp, Login, Logout } from "../controllers/auth.controllers.js";

const router = express.Router();

router.get("/signup", SignUp )
router.get("/logout", Logout);
router.get("/login", Login);

export default router;