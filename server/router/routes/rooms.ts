import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("These are all rooms");
});

router.get("/:id", (req, res) => {
  res.send("This is one specific Room");
});

router.post("/", (req, res) => {
  res.send("This creates a room");
});

router.put("/:id", (req, res) => {
  res.send("This changes rooms settings");
});

router.delete("/:id", (req, res) => {
  res.send("This deletes a room");
});

export default router;
