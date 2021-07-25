import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/db.module';
import { BudgetRepository } from './model/budget.repository';
import { BudgetProfessionalRepository } from './model/budget_professional.repository';
import { BudgetController } from './budget.controller';
import { BudgetService } from './budget.service';
import { ProfessionalModule } from '../professional/professional.module';

@Module({
  imports: [DatabaseModule, ProfessionalModule],
  controllers: [BudgetController],
  providers: [BudgetRepository, BudgetProfessionalRepository, BudgetService],
})
export class BudgetsModule {}
