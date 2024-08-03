import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/database.connection";
import BorrowedBook from "./borrow-book.model";

class User extends Model {
  public id!: number;
  public name!: string;
  public createdAt!: Date;
  public updatedAt!: Date;

  // İlişkili modellerin tanımlanması
  public BorrowedBooks?: BorrowedBook[];
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "User",
    tableName: "users",
  }
);

export default User;
