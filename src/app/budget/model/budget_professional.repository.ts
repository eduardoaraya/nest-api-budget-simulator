import { Connection } from 'typeorm';
import { DbConnectionProviderName } from '../../../database/db.connection';
import { BudgetProfessional } from './budget_professional.entity';

export const BudgetProfessionalRepositoryName =
  'BUDGET_PROFESSIONAL_REPOSITORY';

export const BudgetProfessionalRepository = {
  provide: BudgetProfessionalRepositoryName,
  useFactory: (connection: Connection) =>
    connection.getRepository(BudgetProfessional),
  inject: [DbConnectionProviderName],
};
