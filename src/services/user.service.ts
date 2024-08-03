import User from "../models/user.model";
import BorrowedBook from "../models/borrow-book.model";
import Book from "../models/book.model";

class UserService {
  async getAllUsers() {
    return User.findAll({
      attributes: ["id", "name"],
    });
  }

  async getUserById(id: number) {
    return User.findByPk(id, {
      attributes: ["id", "name"],
    });
  }

  async getUserWithBooks(id: number) {
    const user = await User.findByPk(id, {
      attributes: ["id", "name"],
      include: [
        {
          model: BorrowedBook,
          attributes: ["borrowedAt", "returnedAt", "score"],
          include: [
            {
              model: Book,
              attributes: ["name"],
            },
          ],
        },
      ],
    });

    if (user && user.BorrowedBooks) {
      const books = {
        past: user.BorrowedBooks.filter((b) => b.returnedAt !== null).map(
          (b) => ({
            name: b.Book!.name,
            userScore: b.score,
          })
        ),
        present: user.BorrowedBooks.filter((b) => b.returnedAt === null).map(
          (b) => ({
            name: b.Book!.name,
          })
        ),
      };
      return { id: user.id, name: user.name, books };
    }
    return null;
  }

  async createUser(name: string) {
    return User.create({ name });
  }
}

export default new UserService();
