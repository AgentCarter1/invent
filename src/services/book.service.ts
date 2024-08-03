import Book from "../models/book.model";

class BookService {
  async getAllBooks() {
    return Book.findAll();
  }

  async getBookById(id: number) {
    return Book.findByPk(id);
  }

  async createBook(name: string, rating: number) {
    return Book.create({ name, rating });
  }
}

export default new BookService();
