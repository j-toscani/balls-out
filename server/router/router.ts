import { Router } from "express";

import auth from "./routes/auth";
import rooms from "./routes/rooms";

const router = Router();

router.use("/api/rooms", rooms);
router.use("/api/auth", auth);

export default router;
