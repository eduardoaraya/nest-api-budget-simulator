import { IsArray, IsNumber } from 'class-validator';
import {
  BudgetRequestInterface,
  ProfessionalsRequestInterface,
} from '../interface/bugdet.interface';

export default class CreateBudgetDto implements BudgetRequestInterface {
  @IsArray()
  professionals: ProfessionalsRequestInterface[];

  @IsNumber()
  amountDays: number;
}
