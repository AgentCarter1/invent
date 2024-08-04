import { IsInt, IsPositive } from "class-validator";

export class BorrowBookDto {
  @IsInt()
  @IsPositive()
  userId!: number | string;

  @IsInt()
  @IsPositive()
  bookId!: number | string;
}
