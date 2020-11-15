import { Router } from "express";

const router = Router();

router.get("/me", (req, res) => {
  res.send("This is your Userdata.");
});

router.get("/:id", (req, res) => {
  res.send("Here is public userdata from User ':id'");
});

router.post("/", (req, res) => {
  res.send("This is your auth-token if you logged in correctly");
});

export default router;
