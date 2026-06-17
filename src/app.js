import express from "express";
import cors from "cors";

import userRoutes from "./modules/auth/auth.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({message: "Running",});
});

app.use("/api/users", userRoutes);

export default app;