import { Router } from "express";
import {
  listUsers,
  getUserById,
  createUser,
} from "../controllers/user.controller";

const router = Router();

router.get("/users", listUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUser);

export default router;
