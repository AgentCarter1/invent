import { Request, Response } from "express";
import BorrowService from "../services/borrow-book.service";
import CustomException from "../errors/custom-exception";
import validationMiddleware from "../middlewares/validation.middleware";
import { BorrowBookDto } from "../dto/borrow-book.dto";
import { ReturnBookDto } from "../dto/return-book.dto";

export const borrowBook = [
  validationMiddleware(BorrowBookDto),
  async (req: Request, res: Response) => {
    try {
      const { userId, bookId } = req.params;
      const borrowedBook = await BorrowService.borrowBook(
        Number(userId),
        Number(bookId)
      );
      res.status(201).json(borrowedBook);
    } catch (error) {
      if (error instanceof CustomException) {
        res.status(error.statusCode).json({ error: error.message });
      } else {
        res.status(500).json({ error: "An unexpected error occurred" });
      }
    }
  },
];

export const returnBook = [
  validationMiddleware(ReturnBookDto),
  async (req: Request, res: Response) => {
    try {
      const { userId, bookId } = req.params;
      const { score } = req.body;
      const returnedBook = await BorrowService.returnBook(
        Number(userId),
        Number(bookId),
        score
      );
      res.status(200).json(returnedBook);
    } catch (error) {
      if (error instanceof CustomException) {
        res.status(error.statusCode).json({ error: error.message });
      } else {
        res.status(500).json({ error: "An unexpected error occurred" });
      }
    }
  },
];
