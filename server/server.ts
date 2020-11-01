const express = require("express");
const _history = require("connect-history-api-fallback");
const app = express();

// Middleware for serving '/dist' directory
const staticFileMiddleware = express.static("/dist/client");

app.post("/api/user", (req, res) => {
  res.send("User created");
});

app.post("/api/room", (req, res) => {
  res.send("Room created");
});

app.get("/api/room", (req, res) => {
  res.send("All rooms shown");
});

app.post("/api/room/:id", (req, res) => {
  res.send("Joined Room");
});

// 1st call for unredirected requests
app.use(staticFileMiddleware);

// Support history api
app.use(
  _history({
    index: "/dist/client/index.html",
  })
);

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
