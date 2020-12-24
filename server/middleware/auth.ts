const jwt = require("jsonwebtoken");

export function authenticateToken(request, response, next) {
  const authHeader = request.headers["authorization"];

  const token = authHeader.split(" ")[1];
  if (token == null) return response.sendStatus(401);

  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
    if (error) return response.sendStatus(403);
    request.body["user"] = user;
    next();
  });
}
