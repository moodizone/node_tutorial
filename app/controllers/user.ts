import { NextFunction, Request, Response } from "express";

import { generate404 } from "../utils/error";

interface UserType {
  id: number;
  username: string;
  name: string;
  age?: number;
}

const list: UserType[] = [
  { id: 1, name: "one", username: "one_u", age: 22 },
  { id: 2, name: "two", username: "two_u" },
  { id: 3, name: "three", username: "three_u", age: 22 },
];

export function getUsers(_req: Request, res: Response, next: NextFunction) {
  try {
    res.status(200).json(list);
  } catch (e) {
    next(e);
  }
}
export function getUser(req: Request<Pick<UserType, "id">>, res: Response, next: NextFunction) {
  try {
    const { id } = req.params;
    const foundedUser = list.find((user) => user.id === Number(id));

    if (foundedUser) {
      res.status(200).json(foundedUser);
    } else {
      generate404(res);
    }
  } catch (e) {
    next(e);
  }
}
