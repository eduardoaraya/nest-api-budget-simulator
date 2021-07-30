import { forwardRef, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepository } from './model/user.repository';
import { UserService } from './user.service';
import { DatabaseModule } from '../../database/db.module';
import { AuthModule } from '../auth/auth.module';
import { AuthService } from '../auth/auth.service';

@Module({
  imports: [DatabaseModule, forwardRef(() => AuthModule)],
  controllers: [UserController],
  providers: [UserRepository, UserService],
  exports: [UserService],
})
export class UserModule {}
