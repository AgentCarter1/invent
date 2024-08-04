import { Router } from "express";
import { borrowBook, returnBook } from "../controllers/borrow-book.controller";

const router = Router();

router.post("/borrow", borrowBook);
router.post("/return", returnBook);

export default router;
