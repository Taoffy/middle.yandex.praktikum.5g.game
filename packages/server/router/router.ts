import { Router, ErrorRequestHandler, RequestHandler } from 'express';
import { cookieParser } from '../middlewares';

import { ROUTES, renderHtml } from '../utils';

const router: Router = Router();

const middlewares: Array<RequestHandler | ErrorRequestHandler> = [cookieParser];

function appRoutes(router: Router) {
  router.get(ROUTES, middlewares, renderHtml);
}

appRoutes(router);

export { router, appRoutes };
