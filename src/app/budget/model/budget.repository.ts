import { Connection } from 'typeorm';
import { DbConnectionProviderName } from '../../../database/db.connection';
import { Budget } from './budget.entity';

export const BudgetRepositoryName = 'BUDGET_REPOSITORY';

export const BudgetRepository = {
  provide: BudgetRepositoryName,
  useFactory: (connection: Connection) => connection.getRepository(Budget),
  inject: [DbConnectionProviderName],
};
