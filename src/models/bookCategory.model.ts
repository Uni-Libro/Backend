import { Sequelize, Model } from 'sequelize';
import { BookModel } from './books.model';
import { CategoryModel } from './category.model';

export class CategoryBook extends Model {
  public bookModelId: number;
  public categoryModelId: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize, bookModel: typeof BookModel, categoryModel: typeof CategoryModel) {
  CategoryBook.init({}, { sequelize });
  bookModel.belongsToMany(categoryModel, { through: CategoryBook });
  categoryModel.belongsToMany(bookModel, { through: CategoryBook });
  return CategoryBook;
}
