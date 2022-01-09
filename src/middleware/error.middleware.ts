// error.middleware.ts
const { Context } = require('koa');
import { logger } from '../config/logger';

export async function errorHandle(ctx: any, next: () => Promise<any>) {
  try {
    await next();
  } catch (err) {
    if (!err.code) {
      logger.error(err.stack);
    }
    ctx.body = {
      code: err.code || -1,
      message: err.message.trim(),
    };
    ctx.status = 200; // http 状态码设为200，让前端不报错
  }
}
