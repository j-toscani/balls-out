import { initDatabase } from "./db";
import app from "./app";

const port = process.env.PORT || 5000;
const dbURL = process.env.DB_URL || "mongodb://localhost:27017";
const dbName = process.env.DB_NAME || "MyNotes";

//DB Connection
initDatabase(dbURL, dbName).then(() => {
  console.log(`Database from ${dbURL} called ${dbName} is ready`);

  app.listen(port, () => {
    console.log(`Server listens on http://localhost:${port}`);
  });
});
