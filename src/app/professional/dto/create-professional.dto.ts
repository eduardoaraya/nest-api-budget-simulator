import { IsString, IsNumber } from 'class-validator';
import ProfessionalInterface from '../interface/professional.interface';

export class ProfessionalDto implements ProfessionalInterface {
  @IsString()
  name: string;

  @IsNumber()
  value: number;

  @IsNumber()
  platformRate: number;
}
