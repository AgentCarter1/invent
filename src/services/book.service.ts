import Book from "../models/book.model";
import BorrowedBook from "../models/borrow-book.model";

class BookService {
  async getAllBooks() {
    return Book.findAll({
      attributes: ["id", "name"],
    });
  }

  async getBookById(id: number) {
    return Book.findByPk(id, {
      attributes: ["id", "name"],
    });
  }

  async getBookWithScore(id: number) {
    const book = await Book.findByPk(id, {
      attributes: ["id", "name"],
      include: [
        {
          model: BorrowedBook,
          attributes: ["score"],
        },
      ],
    });

    if (book && book.BorrowedBooks) {
      const scores = book.BorrowedBooks.map((b) => b.score).filter(
        (score): score is number => score !== null
      );
      const score =
        scores.length > 0
          ? (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(2)
          : -1;
      return { id: book.id, name: book.name, score };
    }
    return { id: book!.id, name: book!.name, score: -1 };
  }

  async createBook(name: string) {
    return Book.create({ name });
  }
}

export default new BookService();
