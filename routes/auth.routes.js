import { Router } from "express";

const authRouter = Router();

authRouter.post("/sign-up", (req, res) => {
  res.send({ title: "Sign Up Endpoint" });
});

authRouter.post("/sign-in", (req, res) => {
  res.send({ title: "Sign in Endpoint" });
});

authRouter.post("/sign-out", (req, res) => {
  res.send({ title: "Sign out Endpoint" });
});

// authRouter.post("/sign-up", (req, res) => { res.send({title: "Sign Up Endpoint"}); });

export default authRouter;
