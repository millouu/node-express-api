import express from "express";
import { v4 as uuidv4 } from "uuid";
import {
  createUser,
  getAllUsers,
  getUser,
  deleteUser,
  updateUser,
} from "../controllers/users.js";
const router = express.Router();

//all routes in here are starting with /users (defined in index.js)
router.get("/", getAllUsers);

router.post("/", createUser);

router.get("/:id", getUser);

router.delete("/:id", deleteUser);

router.patch("/:id", updateUser);

export default router;
