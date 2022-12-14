import { Sequelize, DataTypes, Model } from 'sequelize';
import { Author } from '@interfaces/author.interface';

export type AuthorCreationAttributes = Author;

export class AuthorModel extends Model<Author, AuthorCreationAttributes> implements Author {
  public id: number;
  public name: string;
  public imageUrl: string;
  public description: string;
  public books: number[];

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof AuthorModel {
  AuthorModel.init(
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
    },
    {
      tableName: 'author',
      sequelize,
    },
  );

  return AuthorModel;
}
