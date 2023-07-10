import { DataSource } from 'typeorm';

export const dataSource = new DataSource({
  type: 'mongodb',
  host: 'localhost',
  port: 5432,
  username: 'marlon',
  password: 'docker',
  database: 'apiinfluencers',
  entities: ['./src/shared/typeorm/migrations/*.ts'],
  migrations: ['./src/shared/typeorm/migrations/*.ts'],
  // entities: ['./dist/modules/**/typeorm/entities/*.ts'],
  // migrations: ['./dist/shared/typeorm/migrations/*.ts'],
  // cli: {
  //   migrationsDir: './dist/shared/typeorm/migrations',
  // },
});
