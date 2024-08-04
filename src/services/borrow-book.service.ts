import BorrowedBook from "../models/borrow-book.model";

class BorrowService {
  async borrowBook(userId: number, bookId: number) {
    const isBorrowedBook = await BorrowedBook.findOne({
      where: { userId, bookId, returnedAt: null },
    });

    if (isBorrowedBook) throw new Error("You Have Already Borrowed Book");

    return BorrowedBook.create({
      userId,
      bookId,
      borrowedAt: new Date(),
      returnedAt: null,
      score: null,
    });
  }

  async returnBook(userId: number, bookId: number, score: number) {
    const borrowedBook = await BorrowedBook.findOne({
      where: { userId, bookId, returnedAt: null },
    });

    if (borrowedBook) {
      borrowedBook.returnedAt = new Date();
      borrowedBook.score = score;
      await borrowedBook.save();
      return borrowedBook;
    }
    throw new Error("Borrowed book not found");
  }
}

export default new BorrowService();
