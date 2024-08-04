import User from "./user.model";
import Book from "./book.model";
import BorrowedBook from "./borrow-book.model";

export const setupAssociations = () => {
  User.hasMany(BorrowedBook, { foreignKey: "userId" });
  BorrowedBook.belongsTo(User, { foreignKey: "userId" });

  Book.hasMany(BorrowedBook, { foreignKey: "bookId" });
  BorrowedBook.belongsTo(Book, { foreignKey: "bookId" });
};
