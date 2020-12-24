import { Router } from "express";
import { authenticateToken } from "../middleware/auth";

import auth from "./routes/auth";
import rooms from "./routes/rooms";

const router = Router();

router.use("/api/auth", auth);
router.use(authenticateToken);
router.use("/api/rooms", rooms);

export default router;
