import startDB from "./core/db";
import app from "./core/app";

const port = process.env.PORT || 5000;
const dbURL = process.env.DB_URL || "mongodb://localhost:27017";

//DB Connection
export const startServer = () => {
  const promise = new Promise((res, rej) => {
    try {
      app.listen(port, () => {
        console.log(`Server listening on ${port}`);
        console.log(`Server Adress: http://localhost:${port}`);
        res();
      });
    } catch (err) {
      console.log(err, "Server was not able to start");
      rej();
    }
  });
  return promise;
};

startServer()
  .then(() => startDB(dbURL))
  .catch(() => {});
