import BorrowedBook from "../models/borrow-book.model";
import CustomException from "../errors/custom-exception";
import {
  BorrowedBookAttributesEnum,
  BorrowedBookAttributes,
} from "../types/borrow-book.types";

class BorrowService {
  async borrowBook(userId: number, bookId: number) {
    const isBorrowedBook = await BorrowedBook.findOne({
      where: { userId, bookId, returnedAt: null },
    });

    if (isBorrowedBook) {
      throw new CustomException(400, "You have already borrowed this book");
    }

    const borrowedBook = await BorrowedBook.create({
      userId,
      bookId,
      borrowedAt: new Date(),
      returnedAt: null,
      score: null,
    });

    const cleanBook = await BorrowedBook.findByPk(borrowedBook.id, {
      attributes: {
        exclude: [
          BorrowedBookAttributesEnum.Id,
          BorrowedBookAttributesEnum.Score,
          BorrowedBookAttributesEnum.ReturnedAt,
          BorrowedBookAttributesEnum.CreatedAt,
          BorrowedBookAttributesEnum.UpdatedAt,
        ],
      },
    });

    return cleanBook as BorrowedBookAttributes;
  }

  async returnBook(userId: number, bookId: number, score: number) {
    const borrowedBook = await BorrowedBook.findOne({
      where: { userId, bookId, returnedAt: null },
    });

    if (!borrowedBook) {
      throw new CustomException(404, "Borrowed book not found");
    }

    borrowedBook.returnedAt = new Date();
    borrowedBook.score = score;
    await borrowedBook.save();

    const cleanBook = await BorrowedBook.findByPk(borrowedBook.id, {
      attributes: {
        exclude: [
          BorrowedBookAttributesEnum.Id,
          BorrowedBookAttributesEnum.CreatedAt,
          BorrowedBookAttributesEnum.UpdatedAt,
        ],
      },
    });

    return cleanBook as BorrowedBookAttributes;
  }
}

export default new BorrowService();
