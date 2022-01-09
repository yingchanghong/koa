// resoponse.middleware.ts
const { Context } = require('koa');

export async function responseHandle(ctx: any, next: () => Promise<any>) {
  if (ctx.result !== undefined) {
    ctx.type = 'json';
    ctx.body = {
      code: 0,
      data: ctx.result,
      success: true,
    };
  }
  await next();
}
