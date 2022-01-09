const { createUser } = require('../service/user');
const { setJwt } = require('../middleware/jwt');
class User {
  async register(ctx: any, next: any) {
    // 1获取数据
    console.log(ctx.request.body);
    //操作数据库
    const result = await createUser();
    //返回结果
    ctx.body = result;
  }
  async login(ctx: any, next: any) {
    const { name, password } = ctx.request.body;
    if (name == '123' && password == '123') {
      const result = {
        token: setJwt(ctx, 10),
        msg: '登录成功',
      };
      ctx.result = result;
      next();
    }
  }
  async userInfo(ctx: any, next: any) {
    ctx.body = '获取';
  }
}
module.exports = new User();
