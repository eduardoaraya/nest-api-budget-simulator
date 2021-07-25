import { createConnection } from 'typeorm';

declare const process;

export const DbConnectionProviderName = 'DATABASE_CONNECTION';

export const DbConnection = [
  {
    provide: DbConnectionProviderName,
    useFactory: async () =>
      await createConnection({
        type: process.env.DB_TYPE,
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE,
        entities: [__dirname + '/../app/**/model/*.entity{.ts,.js}'],
        synchronize: true,
      }),
  },
];
