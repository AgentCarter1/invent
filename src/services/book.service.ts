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

  async createBook(name: string) {
    return Book.create({ name });
  }
}

export default new BookService();
