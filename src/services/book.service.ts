import Book from "../models/book.model";
import CustomException from "../errors/custom-exception";

class BookService {
  async getAllBooks() {
    return Book.findAll({
      attributes: ["id", "name"],
    });
  }

  async getBookById(id: number) {
    const book = await Book.findByPk(id, {
      attributes: ["id", "name"],
    });
    if (!book) {
      throw new CustomException(404, "Book not found.");
    }
    return book;
  }

  async createBook(name: string) {
    return Book.create({ name });
  }
}

export default new BookService();
