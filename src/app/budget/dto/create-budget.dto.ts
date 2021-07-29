import {
  IsArray,
  IsNumber,
  ArrayNotEmpty,
  IsNotEmpty,
  Min,
} from 'class-validator';
import {
  BudgetRequestInterface,
  ProfessionalsRequestInterface,
} from '../interface/bugdet.interface';

export default class CreateBudgetDto implements BudgetRequestInterface {
  @IsArray()
  @ArrayNotEmpty()
  professionals: ProfessionalsRequestInterface[];

  @IsNumber()
  @IsNotEmpty()
  @Min(1)
  amountDays: number;
}
