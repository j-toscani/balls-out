require("dotenv").config();

import router from "../router/router";

const express = require("express");
const _history = require("connect-history-api-fallback");

const app = express();

app.use(express.json());
app.use(router);

// Middleware for serving '/dist' directory
const staticFileMiddleware = express.static(__dirname);

// 1st call for unredirected requests
app.use(staticFileMiddleware);

// Support history api
app.use(
  _history({
    index: "/index.html",
  })
);

export default app;
