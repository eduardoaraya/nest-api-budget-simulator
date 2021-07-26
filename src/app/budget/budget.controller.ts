import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import { BudgetService } from './budget.service';
import { Response } from 'express';
import CreateBudgetDto from './dto/create-budget.dto';
import { ProfessionalService } from '../professional/professional.service';
@Controller('budget')
export class BudgetController {
  constructor(
    private budgetService: BudgetService,
    private professionalService: ProfessionalService,
  ) {}

  @Get('list')
  async getList(@Res() res: Response) {
    return res.status(HttpStatus.OK).json(await this.budgetService.findAll());
  }

  @Post('create')
  async create(@Body() createBudgetDto: CreateBudgetDto, @Res() res: Response) {
    const userId = 1,
      { professionals, amountDays } = createBudgetDto;

    const entityProfessionals = await Promise.all(
      professionals.map(async (item) => {
        return await this.professionalService.find(item.id);
      }),
    );

    if (entityProfessionals.includes(undefined)) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Not found Professional in request.',
        error: 'Bad Request!',
      });
    }

    const budget = await this.budgetService.save(
      userId,
      amountDays,
      professionals,
    );

    return res.status(HttpStatus.CREATED).json({ budget });
  }
}
