import * as dotenv from 'dotenv';
import * as path from 'path';

declare const process;

dotenv.config({
  path: path.resolve(__dirname, '..', '..', '.env'),
});

export default {
  type: process.env.DB_TYPE,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  entities: [
    path.join(__dirname, '..', 'app', '**', 'model', '*.entity{.ts,.js}'),
  ],
  migrations: [path.join(__dirname, 'migration', '*.ts')],
  synchronize: true,
};
