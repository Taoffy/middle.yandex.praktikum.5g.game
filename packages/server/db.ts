import { Sequelize, SequelizeOptions } from 'sequelize-typescript';

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

async function connectDatabase() {
  try {
    await sequelize.authenticate();
    await sequelize.sync();
  } catch (error) {
    console.error(error);
  }
}

export { sequelize, connectDatabase };
