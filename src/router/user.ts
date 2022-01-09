const Routers = require('koa-router');
const router = new Routers({ prefix: '/user' });
const { register, login, userInfo } = require('../controller/user');
router.post('/register', register);
router.post('/login', login);
router.get('/userInfo', userInfo);
module.exports = router;
