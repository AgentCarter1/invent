import { IsInt, IsPositive, IsNumber, Min, Max } from "class-validator";

export class ReturnBookDto {
  @IsInt()
  @IsPositive()
  userId!: number | string;

  @IsInt()
  @IsPositive()
  bookId!: number | string;

  @IsNumber()
  @Min(0)
  @Max(10)
  score!: number;
}
