import {
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
  IsEmail,
} from 'class-validator';

export default class UpdateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @MinLength(11)
  @MaxLength(11)
  @IsString()
  cpf: string;

  @MinLength(14)
  @MaxLength(14)
  @IsString()
  cnpj: string;

  @IsString()
  telephone: string;

  @IsString()
  companyName: string;

  @IsString()
  addressZipcode: string;

  @IsString()
  addressStreet: string;

  @IsNumber()
  addressNumber: number;

  @IsString()
  addressComplement: string;

  @IsString()
  addressState: string;

  @IsString()
  addressCity: string;

  @IsString()
  addressDistrict: string;
}
