import type { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';

import { serializeObject } from './serializeObject';
import { INITIAL_STATE } from './initialState';

async function renderHtml(req: Request, res: Response) {
  //@ts-ignore
  const render = (await import('../dist/ssr/entry-server.cjs')).render;

  const html = render(req.url, INITIAL_STATE);

  const template = path.resolve(__dirname, '../dist/client/index.html');

  const htmlString = fs.readFileSync(template, 'utf-8');
  let newString = htmlString.replace('<!--ssr-outlet-->', html);
  newString = newString.replace(
    '<!--ssr-redux-->',
    ` <script>window.__PRELOADED_STATE__ = ${serializeObject(
      INITIAL_STATE
    )}</script>`
  );

  res.send(newString);
}

export { renderHtml };
