import { app } from "../app";

const defaultPort = 3000;

app.listen(defaultPort, () => {
  console.log(`Server is running on port ${defaultPort}`);
});
