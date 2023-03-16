import type { RequestHandler } from 'express';
import cookieParserMiddleware from 'cookie-parser';

const cookieParser: RequestHandler = cookieParserMiddleware();

export { cookieParser };
