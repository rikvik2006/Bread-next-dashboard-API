import { Router } from "express";
import { isAuthenticated } from "../../utils/middlewares";
const router = Router();

router.get("/", isAuthenticated, (req, res) => {
    res.send(200);
})

export default router; 