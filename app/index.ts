import express, { NextFunction, Request, Response } from "express";
import { Error } from "mongoose";

import userRouter from "./routes/user";
import { generate404 } from "./utils/error";

export const app = express();

// middleware to parse JSON in the request body
app.use(express.json());

app.use((_req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Content-Type", "application/json");
  next();
});

app.use("/user", userRouter);

// wildcard middleware
app.use((_req, res) => {
  generate404(res);
});

// error boundary
// eslint-disable-next-line
app.use((err: unknown, _req: Request, res: Response, _next: NextFunction) => {

  // 422
  if (err instanceof Error.ValidationError) {
    const readableError: Record<string, string> = {};

    for (const filed in err.errors) {
      readableError[filed] = err.errors[filed].message;
    }

    res.status(422).json(readableError);
  } else {
    // 500
    console.log(`Error boundary middleware:`, err);
    res.status(500).send({ message: "Internal Server Error" });
  }
});
