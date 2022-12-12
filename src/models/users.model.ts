import { Sequelize, DataTypes, Model, Optional } from 'sequelize';
import { User } from '@interfaces/users.interface';

export type UserCreationAttributes = Optional<User, 'id' | 'password'>;

export class UserModel extends Model<User, UserCreationAttributes> implements User {
  public id: number;
  public password: string;
  public phone: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof UserModel {
  UserModel.init(
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
      phone: {
        allowNull: false,
        type: DataTypes.STRING(14),
      },
    },
    {
      tableName: 'users',
      sequelize,
    },
  );

  return UserModel;
}
