import express from "express";
const router = express.Router();

import { getUser, createUser, editUser, getUsers } from "../controllers";

router.post("/", createUser);
router.get("/:id", getUser);
router.put("/:id", editUser);
router.get("/users", getUsers);
