import { IsArray, IsNumber } from 'class-validator';
import {
  BudgetRequestInterface,
  ProfessionalsRequestInterface,
} from '../interfaces/bugdet.interface';

export default class CreateBudgetDto implements BudgetRequestInterface {
  @IsArray()
  professionals: ProfessionalsRequestInterface[];

  @IsNumber()
  amountDays: number;
}
