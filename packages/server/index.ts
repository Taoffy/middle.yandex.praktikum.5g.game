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

  app.use(function (_req, res, next) {
    res.setHeader(
      'Content-Security-Policy',
      "connect-src *; default-src 'self'; font-src 'self'; img-src 'self'; script-src 'self' 'unsafe-inline' https://ya-praktikum.tech/api/v2/*; style-src 'self'; frame-src 'self'"
    );
    next();
  });

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
