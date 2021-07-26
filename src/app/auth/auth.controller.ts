import {
  Controller,
  HttpStatus,
  Post,
  Req,
  Res,
  UnauthorizedException,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request, Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Req() req: Request, @Res() res: Response) {
    const { email, password } = req.body;
    if (!email || !password) {
      throw new UnauthorizedException();
    }
    return res.status(HttpStatus.OK).json({
      token: await this.authService.auth(email, password),
    });
  }
}
