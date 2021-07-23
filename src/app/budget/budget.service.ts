import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Budget } from './model/budget.entity';
import { BudgetRepositoryName } from './model/budget.repository';
import { BudgetProfessional } from './model/budget_professional.entity';
import { BudgetProfessionalRepositoryName } from './model/budget_professional.repository';

@Injectable()
export class BudgetService {
  constructor(
    @Inject(BudgetRepositoryName)
    private budgetRepository: Repository<Budget>,
    @Inject(BudgetProfessionalRepositoryName)
    private BudgetProfessionalRepository: Repository<BudgetProfessional>,
  ) {}

  async findAll(): Promise<Budget[]> {
    return this.budgetRepository.find();
  }

  async find(id: number): Promise<Budget | null> {
    return this.budgetRepository.findOne(id);
  }

  async save(budget: Budget): Promise<Budget> {
    return this.budgetRepository.save(budget);
  }

  async delete(budget: Budget): Promise<boolean> {
    try {
      await this.budgetRepository.delete(budget);
      return true;
    } catch (_err) {
      return false;
    }
  }
}
