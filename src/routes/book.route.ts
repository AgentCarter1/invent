import { Router } from "express";
import {
  listBooks,
  getBookById,
  createBook,
} from "../controllers/book.controller";

const router = Router();

router.get("/books", listBooks);
router.get("/books/:id", getBookById);
router.post("/books", createBook);

export default router;
