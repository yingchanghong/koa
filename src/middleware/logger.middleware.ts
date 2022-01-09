// logger.middleware.ts
const { Context } = require('koa');
import { logText, logger } from '../config/logger';

export async function loggerHandle(ctx: any, next: () => Promise<any>) {
  const start = Date.now();
  await next();
  const end = Date.now();
  const ms = end - start;
  const log = logText(ctx, ms);
  logger.info(log);
}
