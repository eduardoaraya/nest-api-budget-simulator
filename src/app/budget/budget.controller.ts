import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { BudgetService } from './budget.service';
import { Request, Response } from 'express';
import CreateBudgetDto from './dto/create-budget.dto';
import { ProfessionalService } from '../professional/professional.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AuthRequestPayload } from '../auth/interface/auth.interface';
@Controller('budget')
export class BudgetController {
  constructor(
    private budgetService: BudgetService,
    private professionalService: ProfessionalService,
  ) {}

  @UseGuards(JwtAuthGuard)
  @Get('list')
  async getList(@Req() req: Request, @Res() res: Response) {
    const { userId } = req.user as AuthRequestPayload;
    return res
      .status(HttpStatus.OK)
      .json(await this.budgetService.findAllById(userId));
  }

  @UseGuards(JwtAuthGuard)
  @Post('create')
  async create(
    @Body() createBudgetDto: CreateBudgetDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const { userId } = req.user as AuthRequestPayload,
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
