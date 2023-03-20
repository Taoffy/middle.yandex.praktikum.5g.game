import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { CommentModel, TopicModel, UserModel } from './models';

const { POSTGRES_USER, POSTGRES_PASSWORD, POSTGRES_DB, POSTGRES_INNER_PORT } =
  process.env;

const sequelizeOptions: SequelizeOptions = {
  host: 'postgresql',
  port: parseInt(POSTGRES_INNER_PORT || ''),
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  dialect: 'postgres',
};

const sequelize = new Sequelize(sequelizeOptions);

const Topic = sequelize.define('Topic', TopicModel, { freezeTableName: true });
const Comment = sequelize.define('Comment', CommentModel, {
  freezeTableName: true,
});
const User = sequelize.define('User', UserModel, { freezeTableName: true });

User.hasMany(Comment);
Comment.belongsTo(User);
User.hasMany(Topic);
Topic.belongsTo(User);
Topic.hasMany(Comment);
Comment.belongsTo(Topic);

async function connectDatabase() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
  } catch (error) {
    console.error(error);
  }
}

export { sequelize, connectDatabase, Topic, Comment, User };
