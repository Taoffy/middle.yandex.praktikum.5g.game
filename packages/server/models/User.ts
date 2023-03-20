import type { ModelAttributes } from 'sequelize';
import { DataType, Model } from 'sequelize-typescript';

import type { IUser } from './types';

const UserModel: ModelAttributes<Model, IUser> = {
  id: {
    type: DataType.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  login: {
    type: DataType.STRING,
    allowNull: false,
  },
  theme: {
    type: DataType.STRING,
    allowNull: false,
    get() {
      return this.getDataValue('theme');
    },
  },
  avatar: {
    type: DataType.STRING,
    allowNull: true,
  },
  display_name: {
    type: DataType.STRING,
    allowNull: true,
  },
  email: {
    type: DataType.STRING,
    allowNull: false,
  },
  first_name: {
    type: DataType.STRING,
    allowNull: false,
  },
  phone: {
    type: DataType.STRING,
    allowNull: false,
  },
  second_name: {
    type: DataType.STRING,
    allowNull: false,
  },
};

export default UserModel;
