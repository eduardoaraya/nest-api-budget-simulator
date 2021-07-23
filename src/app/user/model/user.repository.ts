import { Connection } from 'typeorm';
import { DbConnectionProviderName } from '../../../database/db.connection';
import { User } from './user.entity';

export const UserRepositoryName = 'USER_REPOSITORY';

export const UserRepository = {
  provide: UserRepositoryName,
  useFactory: (connection: Connection) => connection.getRepository(User),
  inject: [DbConnectionProviderName],
};
