export const db = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'test',
  logging: true,
  timezone: '+08:00',
  dateStrings: true,
  entities: ['../**/*.entity.ts'],
};
