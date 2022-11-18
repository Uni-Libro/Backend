import { Sequelize, DataTypes, Model } from 'sequelize';
import { Category } from '@interfaces/category.interface';

export type CategoryCreationAttributes = Category;

export class CategoryModel extends Model<Category, CategoryCreationAttributes> implements Category {
  public id: number;
  public name: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof CategoryModel {
  CategoryModel.init(
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
    },
    {
      tableName: 'category',
      sequelize,
    },
  );

  return CategoryModel;
}
