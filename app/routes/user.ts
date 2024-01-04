import express from "express";

import { getUser, getUsers } from "../controllers/user";

const router = express.Router();

router.get("/:id", getUser);
router.get("/", getUsers);

export default router;
