import type { ModelAttributes } from 'sequelize';
import { DataType, Model } from 'sequelize-typescript';

import type { IComment } from './types';

const CommentModel: ModelAttributes<Model, IComment> = {
  id: {
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  text: {
    type: DataType.STRING,
  },
  likes: {
    type: DataType.INTEGER,
    defaultValue: 0,
  },
};

export default CommentModel;
