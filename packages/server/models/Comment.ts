import type { ModelAttributes } from 'sequelize';
import { DataType, Model } from 'sequelize-typescript';

import type { IComment } from './types';

const CommentModel: ModelAttributes<Model, IComment> = {
  id: {
    type: DataType.STRING,
    defaultValue: DataType.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
  id_topic: {
    type: DataType.STRING,
    allowNull: false,
  },
  text: {
    type: DataType.STRING,
  },
  id_author: {
    type: DataType.STRING,
  },
  date: {
    type: DataType.STRING,
  },
  likes: {
    type: DataType.INTEGER,
  },
};

export default CommentModel;