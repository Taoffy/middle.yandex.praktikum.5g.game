import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import path from 'path';
import fs from 'fs';
import { createServer as createViteServer } from 'vite';
import type { ViteDevServer } from 'vite';

import { connectDatabase } from './db';
import { forumRouter } from './routers';

import { INITIAL_STATE } from './utils';

const app = express();
app.use(cors());

const isDev = () => process.env.NODE_ENV === 'development';

dotenv.config();

app.use('api/forum', forumRouter);

async function startServer() {
  const port = Number(process.env.SERVER_PORT) || 3001;

  await connectDatabase();

  let vite: ViteDevServer | undefined;
  const distPath = path.dirname(require.resolve('client/dist/index.html'));
  const srcPath = path.dirname(require.resolve('client'));
  const ssrClientPath = require.resolve('client/dist-ssr/client.cjs');

  if (isDev()) {
    vite = await createViteServer({
      server: { middlewareMode: true },
      root: srcPath,
      appType: 'custom',
    });

    app.use(vite.middlewares);
  }

  if (!isDev()) {
    app.use(`/assets`, express.static(path.resolve(distPath, 'assets')));

    global.window = {} as typeof global.window;
    global.FormData = {} as typeof global.FormData;
    global.Blob = {} as typeof global.Blob;
  }

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;
    try {
      let template: string;

      if (!isDev()) {
        template = fs.readFileSync(
          path.resolve(distPath, 'index.html'),
          'utf-8'
        );
      } else {
        template = fs.readFileSync(
          path.resolve(srcPath, 'index.html'),
          'utf-8'
        );
        template = await vite!.transformIndexHtml(url, template);
      }

      let ssr;

      if (!isDev()) {
        ssr = await import(ssrClientPath);
      } else {
        ssr = await vite!.ssrLoadModule(
          path.resolve(srcPath, 'entry-server.tsx')
        );
      }

      const { render } = ssr;

      const appHtml = await render(url, INITIAL_STATE);
      const storesValues = `<script>window.__INITIAL_STATE__=${JSON.stringify(
        INITIAL_STATE
      )}</script>`;

      const html = template
        .replace(`<!--ssr-outlet-->`, appHtml)
        .replace(`<!--ssr-redux-->`, storesValues);

      res.status(200).set({ 'Content-Type': 'text/html' }).end(html);
    } catch (e) {
      if (isDev()) {
        vite!.ssrFixStacktrace(e as Error);
      }
      next(e);
    }
  });

  app.listen(port, () => {
    console.log(`  ➜ 🎸 Server is listening on port: ${port}`);
  });
}

startServer();
