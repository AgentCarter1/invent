import { Request, Response } from "express";
import BorrowService from "../services/borrow-book.service";

export const borrowBook = async (req: Request, res: Response) => {
  try {
    const { userId, bookId } = req.body;
    const borrowedBook = await BorrowService.borrowBook(userId, bookId);
    res.status(201).json(borrowedBook);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while borrowing the book." });
  }
};

export const returnBook = async (req: Request, res: Response) => {
  try {
    const { id, rating } = req.body;
    const borrowedBook = await BorrowService.returnBook(id, rating);
    if (borrowedBook) {
      res.json(borrowedBook);
    } else {
      res.status(404).json({ error: "Borrowed book not found." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while returning the book." });
  }
};
