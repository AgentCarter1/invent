import Book from "../models/book.model";
import CustomException from "../errors/custom-exception";

class BookService {
  private readonly attributes: Array<keyof Book> = ["id", "name"];

  async getAllBooks() {
    return Book.findAll({
      attributes: this.attributes,
    });
  }

  async getBookById(id: number) {
    const book = await Book.findByPk(id, {
      attributes: this.attributes,
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
