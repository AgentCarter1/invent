import { Request, Response } from "express";
import BookService from "../services/book.service";
import CustomException from "../errors/custom-exception";

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
    res.json(book);
  } catch (error) {
    if (error instanceof CustomException) {
      res.status(error.statusCode).json({ error: error.message });
    } else {
      res
        .status(500)
        .json({ error: "An error occurred while fetching the book." });
    }
  }
};

export const createBook = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const book = await BookService.createBook(name);
    res.status(201).json(book);
  } catch (error) {
    res
      .status(500)
      .json({ error: "An error occurred while creating the book." });
  }
};
