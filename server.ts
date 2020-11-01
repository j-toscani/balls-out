const express = require("express");
const _history = require("connect-history-api-fallback");
const app = express();

// Middleware for serving '/dist' directory
const staticFileMiddleware = express.static("dist");

app.post("/api/create", (req, res) => {
  const room = req.body.id;
  console.log("room");
  res.send("Room created");
});

// 1st call for unredirected requests
app.use(staticFileMiddleware);

// Support history api
app.use(
  _history({
    index: "/dist/index.html",
  })
);

app.listen(3000, function() {
  console.log("Example app listening on port 3000!");
});
