import { Body, Controller, Get, HttpStatus, Post, Res } from '@nestjs/common';
import CreateUserDto from './dto/create-user.dto';
import { User } from './model/user.entity';
import { UserService } from './user.service';
import { Response } from 'express';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('list')
  public async list(): Promise<User[]> {
    return await this.userService.findAll();
  }

  @Post('create')
  public async create(@Body() user: CreateUserDto, @Res() res: Response) {
    if (user.password !== user.passwordConfirmation) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'Passwords do not match',
        error: 'Bad Request',
      });
    }
    if (await this.userService.findByEmail(user.email)) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'There is already a user with this email registered',
        error: 'Bad Request',
      });
    }
    if (await this.userService.findByCpf(user.cpf)) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'There is already a user with this CPF registered',
        error: 'Bad Request',
      });
    }
    await this.userService.save(user);
    return res.status(HttpStatus.CREATED).json({
      success: true,
    });
  }
}
