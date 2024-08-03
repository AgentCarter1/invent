import { Request, Response } from "express";
import BookService from "../services/book.service";

export const listBooks = async (req: Request, res: Response) => {
  try {
    const books = await BookService.getAllBooks();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: "An error occurred while fetching books." });
  }
};

export const getBookById = async (req: Request, res: Response) => {
  try {
    const book = await BookService.getBookById(Number(req.params.id));
    if (book) {
      res.json(book);
    } else {
      res.status(404).json({ error: "Book not found." });
    }
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while fetching the book." });
  }
};

export const createBook = async (req: Request, res: Response) => {
  try {
    const { name, rating } = req.body;
    const book = await BookService.createBook(name, rating);
    res.status(201).json(book);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the book." });
  }
};
