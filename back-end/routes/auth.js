import express from "express";
import { signIn, signup } from "../controllers/auth.js";

const router = express.Router();

//CREATE USER
router.post("/signup", signup);

//SIGN IN
router.post("/signin", signIn);

//GOOGLE AUTH
router.post("/google");

export default router;
