import { Router } from "express";
import * as authController from "../controllers/auth.controller";

const authRouter = Router()

authRouter.get("/auth", authController.testHandler);

export default authRouter;
