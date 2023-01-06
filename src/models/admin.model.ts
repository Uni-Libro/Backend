import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { Admin } from '@interfaces/admins.interface';

export type AdminCreationAttributes = Optional<Admin, 'id' | 'password'>;

export class AdminModel extends Model<Admin, AdminCreationAttributes> implements Admin {
  public id: number;
  public password: string;
  public username: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof AdminModel {
  AdminModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      password: {
        allowNull: true,
        type: DataTypes.STRING(255),
      },
      username: {
        allowNull: false,
        type: DataTypes.STRING(30),
      },
    },
    {
      tableName: 'admins',
      sequelize,
    },
  );

  return AdminModel;
}
