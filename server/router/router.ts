import { Router } from "express";

import auth from "./routes/auth";
import rooms from "./routes/rooms";

const router = Router();

router.get("/api/register", (req, res) => {
  const { username, mail, password } = req.body;
  res.send(`You are logged in! ${password}, ${mail}, ${username}`);
});

router.use("/api/rooms", rooms);
router.use("/api/auth", auth);

export default router;
