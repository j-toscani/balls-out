var express = require("express");
var _history = require("connect-history-api-fallback");
var app = express();
// Middleware for serving '/dist' directory
var staticFileMiddleware = express.static("dist");
app.get("/api/hello", function (req, res) { return res.send("Hello from Server!"); });
// 1st call for unredirected requests
app.use(staticFileMiddleware);
// Support history api
app.use(_history({
    index: "/dist/index.html"
}));
app.listen(3000, function () {
    console.log("Example app listening on port 3000!");
});
