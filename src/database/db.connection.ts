import { createConnection } from 'typeorm';

export const DbConnectionProviderName = 'DATABASE_CONNECTION';

export const DbConnection = [
  {
    provide: DbConnectionProviderName,
    useFactory: async () =>
      await createConnection({
        type: 'postgres',
        host: '0.0.0.0',
        port: 5432,
        username: 'postgres',
        password: 'root',
        database: 'nest_database',
        entities: [__dirname + '/../app/**/model/*.entity{.ts,.js}'],
        synchronize: true,
      }),
  },
];
