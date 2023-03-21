import type { ModelAttributes } from 'sequelize';
import { DataType, Model } from 'sequelize-typescript';

import type { ITopic } from './types';

const TopicModel: ModelAttributes<Model, ITopic> = {
  id: {
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataType.STRING,
    allowNull: false,
  },
  description: {
    type: DataType.STRING,
    allowNull: false,
  },
  views: {
    type: DataType.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
};

export default TopicModel;
