import { app } from "../app";

const defaultPort = 3000;
const port = process.env.PORT || defaultPort;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
