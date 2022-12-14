import { Sequelize, DataTypes, Model } from 'sequelize';
import { Book } from '@interfaces/books.interface';

export type BookCreationAttributes = Book;

export class BookModel extends Model<Book, BookCreationAttributes> implements Book {
  public id: number;
  public name: string;
  public imageUrl: string;
  public description: string;
  public price: number;
  public password: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof BookModel {
  BookModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      imageUrl: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      price: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      tableName: 'books',
      sequelize,
    },
  );

  return BookModel;
}
