import { Router } from 'express';

const userRouter = Router();

userRouter.get("/", (req, res) => { res.send({ title: "GET all users"})});

userRouter.get("/:id", (req, res) => { res.send({ title: "GET all users"})});

userRouter.post("/", (req, res) => { res.send({ title: "CREATE new user"})});

userRouter.put("/", (req, res) => { res.send({ title: "UPDATE user"})});

userRouter.delete("/", (req, res) => { res.send({ title: "DELETE user"})});

export default userRouter;
