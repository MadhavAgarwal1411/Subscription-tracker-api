import express from "express";
import { PORT } from "./config/env.js";

import userRoutes from "./routes/auth.routes.js";
import subscriptionRoutes from "./routes/subscription.routes.js";
import authRoutes from "./routes/auth.routes.js";
import connectToDatabase from "./database/mongodb.js";


const app = express();

app.use("/app/v1/auth", authRoutes);
app.use("/app/v1/users", userRoutes);
app.use("/app/v1/subscriptions", subscriptionRoutes);

app.get("/", (req, res) => {
    res.send("welcome to the subscription tracker api");
});

app.listen(PORT, async ()=>{
    console.log(`Subscription tracker api is running on http://localhost/${PORT}`);
    await connectToDatabase();
});

export default app;