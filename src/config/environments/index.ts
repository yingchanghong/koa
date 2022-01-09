// index.ts 根据不同环境导出配置，需要其他环境，可自行添加环境文件，修改下面代码
import * as dev from './env.dev';
import * as prop from './env.prd';

const env = process.env.NODE_ENV;

let environment = dev;

if (env !== 'development') {
  environment = prop;
}

export { environment };
