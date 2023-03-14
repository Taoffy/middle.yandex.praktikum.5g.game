import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import path from 'path';

import { connectDatabase } from './db';
import { router } from './router';

dotenv.config();

async function startServer() {
  const app = express();
  app.use(cors());
  const port = Number(process.env.SERVER_PORT) || 3001;

  await connectDatabase();

  app.use(
    '/assets',
    express.static(path.resolve(__dirname, 'dist/client/assets'))
  );

  app.use(router);

  app.listen(port, () => {
    console.log(`  ➜ 🎸 Server is listening on port: ${port}`);
  });
}

startServer();
