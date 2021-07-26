import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepository } from './model/user.repository';
import { UserService } from './user.service';
import { DatabaseModule } from '../../database/db.module';

@Module({
  imports: [DatabaseModule],
  controllers: [UserController],
  providers: [UserRepository, UserService],
  exports: [UserService],
})
export class UserModule {}
