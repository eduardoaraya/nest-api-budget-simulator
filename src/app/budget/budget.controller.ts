import { Controller, Get } from '@nestjs/common';
import { BudgetService } from './budget.service';

@Controller('budget')
export class BudgetController {
  constructor(private budgetService: BudgetService) {}

  @Get('list')
  async getList() {
    return this.budgetService.findAll();
  }
}
