const koa = require('koa');
const userRoute = require('../router/user');
const app = new koa();
const coaBody = require('koa-body');
const { loggerHandle } = require('../middleware/logger.middleware');
const koajwt = require('koa-jwt');
const { responseHandle } = require('../middleware/resoponse.middleware.ts');
const { errorHandle } = require('../middleware/error.middleware.ts');

const {
  secret,
  setJwt,
  getJwt,
  customAuthorizationCatcher,
} = require('../middleware/jwt');
app.use(customAuthorizationCatcher); // 这个中间件要放在'koa-jwt'的前面
// koa-jwt 中间件会获取前端请求中的token,进行检验
app.use(
  koajwt({
    secret,
    // key: "user", 默认把token解析的内容保存到 'ctx.user' 中
  }).unless({ path: ['/user/login'] })
);

app.use(coaBody());
app.use(loggerHandle);
app.use(userRoute.routes());
app.use(responseHandle);
app.use(errorHandle);

module.exports = app;
