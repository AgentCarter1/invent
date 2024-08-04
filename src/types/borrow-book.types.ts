import BorrowedBook from "../models/borrow-book.model";

export enum BorrowedBookAttributesEnum {
  CreatedAt = "createdAt",
  UpdatedAt = "updatedAt",
  Id = "id",
  Score = "score",
  ReturnedAt = "returnedAt",
}

export type BorrowedBookAttributes = Omit<
  typeof BorrowedBook.prototype,
  keyof typeof BorrowedBookAttributesEnum
>;
