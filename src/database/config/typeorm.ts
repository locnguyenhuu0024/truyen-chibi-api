import { registerAs } from '@nestjs/config';
import { loadEnv } from '../../utils';
import { DataSource, DataSourceOptions } from 'typeorm';
loadEnv();

const config: DataSourceOptions = {
  type: 'mysql',
  host: `${process.env.DB_HOST}`,
  port: parseInt(`${process.env.DB_PORT}`),
  username: `${process.env.DB_USERNAME}`,
  password: `${process.env.DB_PASSWORD}`,
  database: `${process.env.DATABASE}`,
  entities: ['dist/**/*.entity{.ts,.js}'],
  migrations: ['dist/database/migrations/*{.ts,.js}'],
  synchronize: false,
  migrationsTransactionMode: 'each',
  // migrationsRun: true,
};

export default registerAs('typeorm', () => config);
export const connectionSource = new DataSource(config as DataSourceOptions);
