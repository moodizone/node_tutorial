import { Response } from "express";

export function generate404(res: Response) {
  res.status(404).json({ message: "Not found" });
}
