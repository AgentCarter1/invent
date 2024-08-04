import { Router } from "express";
import {
  listUsers,
  getUserById,
  createUser,
} from "../controllers/user.controller";
import { borrowBook, returnBook } from "../controllers/borrow-book.controller";

const router = Router();

router.get("/users", listUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUser);
router.post("/users/:userId/borrow/:bookId", borrowBook);
router.post("/users/:userId/return/:bookId", returnBook);

export default router;
