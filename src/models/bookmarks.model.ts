import { Sequelize, Model } from 'sequelize';
import { BookModel } from './books.model';
import { UserModel } from './users.model';

export class Bookmarks extends Model {
  public userModelId: number;
  public bookModelId: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize, bookModel: typeof BookModel, userModel: typeof UserModel) {
  Bookmarks.init({}, { sequelize });
  bookModel.belongsToMany(userModel, { through: Bookmarks });
  userModel.belongsToMany(bookModel, { through: Bookmarks });
  return Bookmarks;
}
