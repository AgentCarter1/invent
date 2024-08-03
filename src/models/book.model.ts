import { Model, DataTypes } from "sequelize";
import { sequelize } from "../database/database.connection";

class Book extends Model {
  public id!: number;
  public name!: string;
  public rating!: number;
  public createdAt!: Date;
  public updatedAt!: Date;
}

Book.init(
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
    rating: {
      type: DataTypes.FLOAT,
      allowNull: true,
      defaultValue: 0,
    },
  },
  {
    sequelize,
    modelName: "Book",
    tableName: "books",
  }
);

export default Book;
