import { Router } from "express";
import * as bcrypt from "bcryptjs";
import * as jwt from "jsonwebtoken";
import { createUser, findUser, findUsers } from "../../db/actions/users";

const router = Router();

router.get("/", async (req, res) => {
  const user = await findUsers();
  res.json(user);
});

router.post("/", async (req, res) => {
  const data = req.body;

  try {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    const newUser = {
      username: data.username as string,
      email: data.email as string,
      password: hashedPassword as string,
    };

    await createUser(newUser);

    res.send(`User with name ${data.username} was created!`).status(204);
  } catch (err) {
    console.log(err);
    res.send("User was not saved.").status(500);
  }
});

router.post("/login", async (req, res) => {
  const email = req.body?.email;
  const password = req.body?.password;

  if (!password || !email) {
    res.send("Information Missing").status(404);
  }

  const user = await findUser({ email: email });

  if (!user) {
    res.send("No user found").status(404);
  }

  const comparePasswords = await bcrypt.compare(password, user.password);

  try {
    if (comparePasswords) {
      console.log(process.env.ACCESS_TOKEN_SECRET);
      const accessToken = jwt.sign(email, process.env.ACCESS_TOKEN_SECRET);
      res.send(accessToken);
    } else {
      return res.sendStatus(401);
    }
  } catch (error) {
    console.log(error);
    return res.sendStatus(500);
  }
});

router.get("/me", (req, res) => {
  res.send("This is your Userdata.");
});

router.get("/:id", (req, res) => {
  res.send("Here is public userdata from User ':id'");
});

export default router;
