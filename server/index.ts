import startDB from "./core/db";
import app from "./core/app";

const port = process.env.PORT || 5000;
const dbURL = process.env.DB_URL || "mongodb://localhost:27017";
const dbName = process.env.DB_NAME || "MyNotes";

//DB Connection
startDB(dbURL)
  .then(() => {
    console.log(`Database from ${dbURL} called ${dbName} is ready`);

    app.listen(port, () => {
      console.log(`Server listens on http://localhost:${port}`);
    });
  })
  .catch(() => {
    console.log("Server failed to start!");
  });
