import { Connection } from 'typeorm';
import { DbConnectionProviderName } from '../../../database/db.connection';
import { Professional } from './professional.entity';

export const ProfessionalRepositoryName = 'PROFESSIONAL_REPOSITORY';

export const ProfessionalRepository = {
  provide: ProfessionalRepositoryName,
  useFactory: (connection: Connection) =>
    connection.getRepository(Professional),
  inject: [DbConnectionProviderName],
};
