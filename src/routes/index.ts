import { Router } from "express";
import authRouter from "./auth";
import guildRouter from "./guilds";

const router = Router();

router.use("/auth", authRouter);
router.use("/guilds", guildRouter);

export default router;