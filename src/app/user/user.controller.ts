import { Controller, Get } from '@nestjs/common';
import { User } from './model/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('list')
  public async list(): Promise<User[]> {
    return await this.userService.findAll();
  }
}
