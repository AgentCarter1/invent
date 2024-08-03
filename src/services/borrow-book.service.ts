import BorrowedBook from "../models/borrow-book.model";

class BorrowService {
  async borrowBook(userId: number, bookId: number) {
    return BorrowedBook.create({
      userId,
      bookId,
      borrowedAt: new Date(),
      returnedAt: null,
      rating: null,
    });
  }

  async returnBook(id: number, rating: number) {
    const borrowedBook = await BorrowedBook.findByPk(id);
    if (borrowedBook) {
      borrowedBook.returnedAt = new Date();
      borrowedBook.rating = rating;
      await borrowedBook.save();
      return borrowedBook;
    }
    return null;
  }
}

export default new BorrowService();
