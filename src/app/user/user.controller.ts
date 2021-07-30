/* eslint-disable @typescript-eslint/no-unused-vars */
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
import CreateUserDto from './dto/create-user.dto';
import { User } from './model/user.entity';
import { UserService } from './user.service';
import { Response, Request } from 'express';
import UpdateUserDto from './dto/update-user.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AuthRequestPayload } from '../auth/interface/auth.interface';
import { AuthService } from '../auth/auth.service';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private authService: AuthService,
  ) {}

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
    const {
      passwordRememberToken: _passwRembemr,
      password: _passw,
      ...userCreated
    } = await this.userService.save(user);
    return res.status(HttpStatus.CREATED).json({
      success: true,
      token: await this.authService.generateToken(userCreated),
    });
  }

  @UseGuards(JwtAuthGuard)
  @Post('update')
  public async update(
    @Body() user: UpdateUserDto,
    @Req() req: Request,
    @Res() res: Response,
  ) {
    const { userId } = req.user as AuthRequestPayload;
    if (await this.userService.findByEmail(user.email, userId)) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'There is already a user with this email registered',
        error: 'Bad Request',
      });
    }
    if (await this.userService.findByCpf(user.cpf, userId)) {
      return res.status(HttpStatus.BAD_REQUEST).json({
        statusCode: HttpStatus.BAD_REQUEST,
        message: 'There is already a user with this CPF registered',
        error: 'Bad Request',
      });
    }
    await this.userService.update(userId, user);
    return res.status(HttpStatus.CREATED).json({
      success: true,
    });
  }
}
