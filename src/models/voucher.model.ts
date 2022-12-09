import { Sequelize, DataTypes, Model } from 'sequelize';
import { Voucher } from '@interfaces/voucher.interface';

export type AuthorCreationAttributes = Voucher;

export class VoucherModel extends Model<Voucher, AuthorCreationAttributes> implements Voucher {
  public id: number;
  public code: string;
  public discount: number;
  public upTo: number;
  public validFrom: Date;
  public validTo: Date;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export default function (sequelize: Sequelize): typeof VoucherModel {
  VoucherModel.init(
    {
      id: {
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      code: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      discount: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      upTo: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      validFrom: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      validTo: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      tableName: 'vouchers',
      sequelize,
    },
  );

  return VoucherModel;
}
