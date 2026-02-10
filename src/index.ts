import express from "express";
import { serverPort } from "./lib/env";
import authRouter from "./routes/auth.route";

const app = express();

app.use(express.json());

// routes
app.use("/api", authRouter);

app.listen(serverPort, () => {
  console.log(`Server is running on port`, serverPort)
})
