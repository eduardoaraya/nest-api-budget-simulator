import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { Response } from 'express';
import CreateBudgetDto from './dto/create-budget.dto';
@Controller('budget')
export class BudgetController {
  constructor(private budgetService: BudgetService) {}

  @Get('list')
  async getList(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(await this.budgetService.findAll());
  }

  @Post('create')
  async create(@Body() createBudgetDto: CreateBudgetDto, @Res() res: Response) {
    const budget = await this.budgetService.save(createBudgetDto);
    return res.status(HttpStatus.CREATED).json(budget);
  }
}
