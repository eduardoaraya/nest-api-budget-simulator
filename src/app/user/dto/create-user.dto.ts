import {
  IsString,
  MaxLength,
  MinLength,
  IsEmail,
  IsNumberString,
} from 'class-validator';

export default class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @MinLength(6)
  @IsString()
  password: string;

  @MinLength(6)
  @IsString()
  passwordConfirmation: string;

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

  @IsNumberString()
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
