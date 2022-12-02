import { Sequelize, Model } from 'sequelize';
import { BookModel } from './books.model';
import { AuthorModel } from './authors.model';

export class AuthorBook extends Model {
  public bookModelId: number;
  public authorModelId: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize, bookModel: typeof BookModel, authorModel: typeof AuthorModel) {
  AuthorBook.init({}, { sequelize });
  bookModel.belongsToMany(authorModel, { through: AuthorBook });
  authorModel.belongsToMany(bookModel, { through: AuthorBook });
  return AuthorBook;
}
