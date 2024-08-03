import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/database.connection";

class BorrowedBook extends Model {
  public id!: number;
  public userId!: number;
  public bookId!: number;
  public borrowedAt!: Date;
  public returnedAt!: Date | null;
  public rating!: number | null;
}

BorrowedBook.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "User",
        key: "id",
      },
    },
    bookId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Book",
        key: "id",
      },
    },
    borrowedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    returnedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    rating: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "BorrowedBook",
    tableName: "borrowed_books",
  }
);

export default BorrowedBook;
