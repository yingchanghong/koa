export const db = {
  type: 'mysql',
  host: 'localhost',
  port: 3307,
  username: 'root',
  password: '123456',
  database: 'test',
  logging: true,
  // synchronize: true,
  timezone: '+08:00',
  dateStrings: true,
  entities: ['../**/*.entity.ts'],
};
