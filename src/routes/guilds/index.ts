import { Router } from "express";
import { getGuildPermissionsController, getGuildsController } from "../../controllers/guilds";
import { isAuthenticated } from "../../utils/middlewares";
const router = Router();

router.get("/", isAuthenticated, getGuildsController);

router.get("/:id/permissions", isAuthenticated, getGuildPermissionsController)

export default router;