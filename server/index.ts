import * as mongoose from "mongoose";

import { app } from "../app";

const defaultPort = 3000;
const connectionString = "mongodb://127.0.0.1:27017/nodeDB";

mongoose
  .connect(connectionString)
  .then(({ connection }) => {
    console.log("Connected to MongoDB");

    if (connection) {
      connection.on("connected", () => console.log("connected"));
      connection.on("open", () => console.log("open"));
      connection.on("disconnected", () => console.log("disconnected"));
      connection.on("reconnected", () => console.log("reconnected"));
      connection.on("disconnecting", () => console.log("disconnecting"));
      connection.on("close", () => console.log("close"));
    }
  })
  .catch((error) => {
    console.error(`MongoDB connection error: ${error.toString()}`);
  });

app.listen(defaultPort, () => {
  console.log(`Server is running on port ${defaultPort}`);
});
