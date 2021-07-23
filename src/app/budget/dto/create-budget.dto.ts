import { IsNumber, IsString } from 'class-validator';
import BudgetInterface from '../interfaces/bugdet.interface';

export default class CreateBudgetDto implements BudgetInterface {
  @IsString()
  name: string;

  @IsNumber()
  userId: number;

  @IsNumber()
  total: number;

  @IsNumber()
  totalPerDay: number;

  @IsNumber()
  amountDays: number;
}
