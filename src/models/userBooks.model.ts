import { Sequelize, Model } from 'sequelize';
import { BookModel } from './books.model';
import { UserModel } from './users.model';

export class UserBooks extends Model {
  public userModelId: number;
  public bookModelId: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize, bookModel: typeof BookModel, userModel: typeof UserModel) {
  UserBooks.init({}, { sequelize });
  bookModel.belongsToMany(userModel, { through: UserBooks });
  userModel.belongsToMany(bookModel, { through: UserBooks });
  return UserBooks;
}
