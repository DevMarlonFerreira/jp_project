import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'mongodb',
  host: 'mongodb://root:admin@localhost:27017/apiinfluencers?authSource=admin',
  // port: 27017,
  // username: 'root',
  // password: 'admin',
  // database: 'apiinfluencers',
  useNewUrlParser: true,
  synchronize: true,
  logging: true,
  entities: ['./src/modules/infra/typeorm/entities/*.ts'],
  migrations: ['./src/shared/typeorm/migrations/*.ts'],
  // entities: ['./dist/modules/**/typeorm/entities/*.ts'],
  // migrations: ['./dist/shared/typeorm/migrations/*.ts'],
  // cli: {
  //   migrationsDir: './dist/shared/typeorm/migrations',
  // }, port: 27017,
});
