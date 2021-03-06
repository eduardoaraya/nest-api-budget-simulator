import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { ProfessionalService } from '../professional/professional.service';
import BudgetInterface, {
  ProfessionalsRequestInterface,
} from './interface/bugdet.interface';
import { Budget } from './model/budget.entity';
import { BudgetRepositoryName } from './model/budget.repository';
import { BudgetProfessional } from './model/budget_professional.entity';
import { BudgetProfessionalRepositoryName } from './model/budget_professional.repository';

@Injectable()
export class BudgetService {
  private readonly TOTAL_PER_DAY = 20000;
  constructor(
    @Inject(BudgetRepositoryName)
    private budgetRepository: Repository<Budget>,
    @Inject(BudgetProfessionalRepositoryName)
    private BudgetProfessionalRepository: Repository<BudgetProfessional>,
    private professionalService: ProfessionalService,
  ) {}

  async findAll(): Promise<Budget[]> {
    return this.budgetRepository.find();
  }

  async findAllById(userId): Promise<Budget[]> {
    return this.budgetRepository
      .createQueryBuilder('budget')
      .addOrderBy('budget.id', 'DESC')
      .where({ userId })
      .getMany();
  }

  async find(id: number): Promise<Budget | null> {
    return this.budgetRepository.findOne(id);
  }

  async delete(budget: Budget): Promise<boolean> {
    try {
      await this.budgetRepository.delete(budget);
      return true;
    } catch (_err) {
      return false;
    }
  }

  async save(
    userId: number,
    amountDays: number,
    professionals: ProfessionalsRequestInterface[],
  ): Promise<BudgetInterface> {
    let budget: BudgetInterface = new Budget();
    budget.userId = userId;
    budget.amountDays = amountDays;
    budget.total = await this.calcTotal(professionals, amountDays);
    budget.totalPerDay = this.TOTAL_PER_DAY;
    budget = await this.budgetRepository.save(budget);
    await this.createRelationProfessional(professionals, budget);
    return budget;
  }

  private async createRelationProfessional(
    professionals: ProfessionalsRequestInterface[],
    budget: BudgetInterface,
  ) {
    const budgetProfessional = professionals.map((item) => ({
      budgetId: budget.id,
      professionalId: item.id,
      amount: item.amount,
    }));
    return this.BudgetProfessionalRepository.save(budgetProfessional);
  }

  async calcTotal(professionals: ProfessionalsRequestInterface[], amountDays) {
    const calcAllProfessioanls = await Promise.all(
      professionals.map(async (item) => {
        const entity = await this.professionalService.find(item.id);
        const total = entity.value * item.amount;
        return total + total * entity.platformRate;
      }),
    );
    return (
      calcAllProfessioanls.reduce((total, current) => total + current, 0) +
      this.TOTAL_PER_DAY * amountDays
    );
  }
}
