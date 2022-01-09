const jwt = require('jsonwebtoken');
export const secret = 'ying-chang-hong';
export const setJwt = (ctx: any, time: any) => {
  console.log(time);

  const { name } = ctx.request.body;
  const token = jwt.sign({ name }, secret, { expiresIn: time + 's' });
  return token;
};

export const getJwt = (ctx: any, next: () => Promise<any>) => {
  try {
    const auth = ctx.header.token;
    return jwt.verify(auth, secret);
  } catch (e) {
    throw { code: 401, message: '登录过期' };
  }
};
// 自定义的权限错误处理, 当然这是特殊的业务需求
export const customAuthorizationCatcher = async function (
  ctx: any,
  next: () => Promise<any>
) {
  // console.log(ctx);
  try {
    await next();
  } catch (err) {
    // 由 koa-jwt 抛出的错误
    if (err.status === 401) {
      // 强制修改网络状态, 在接口中返回业务类型状态码(根据需求)
      ctx.status = 401;
      ctx.body = { code: 40100, msg: '无效 token' };
    } else {
      throw err;
    }
  }
};
