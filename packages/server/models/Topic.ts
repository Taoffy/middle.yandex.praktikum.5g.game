import type { ModelAttributes } from 'sequelize';
import { DataType, Model } from 'sequelize-typescript';

import type { ITopic } from './types';

const TopicModel: ModelAttributes<Model, ITopic> = {
  id: {
    type: DataType.UUID,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
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
  id_author: {
    type: DataType.STRING,
    allowNull: false,
  },
  date: {
    type: DataType.STRING,
    allowNull: false,
  },
  views: {
    type: DataType.INTEGER,
  },
};

export default TopicModel;