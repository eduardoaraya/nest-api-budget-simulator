import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import UserInterface from '../user/interface/user.interface';
import { comparePassword } from '../user/model/hash.provider';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async matchEmail(email: string) {
    return await this.userService.findByEmail(email);
  }

  async matchPassword(user: UserInterface, password: string) {
    return await comparePassword(password, user.password);
  }

  async auth(email: string, password: string): Promise<string> {
    const user = await this.matchEmail(email);
    if (!user) {
      throw new UnauthorizedException();
    }
    if (!(await this.matchPassword(user, password))) {
      throw new UnauthorizedException();
    }
    const {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      password: _pass,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      passwordRememberToken: _passRemeber,
      ...data
    } = user;
    return this.generateToken(data);
  }

  async generateToken(data): Promise<string> {
    return await this.jwtService.sign(data);
  }
}
