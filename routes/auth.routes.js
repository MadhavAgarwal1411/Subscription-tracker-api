import { Router } from "express";
import { signIn, signOut, signUp } from "../controllers/auth.controller.js";

const authRouter = Router();

// Path: app/v1/auth/sign-up (POST)
authRouter.post("/sign-up", signUp)

// Path: app/v1/auth/sign-IN (POST)
authRouter.post("/sign-in", signIn);

// Path: app/v1/auth/sign-OUT (POST)
authRouter.post("/sign-out", signOut);

export default authRouter;
