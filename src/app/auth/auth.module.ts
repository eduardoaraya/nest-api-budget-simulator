import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { AuthService } from './auth.service';
import { JwtConfig } from './jwt.config';
import { JwtStrategy } from './jwt.strategy';
import { AuthController } from './auth.controller';
@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: JwtConfig.secret,
      signOptions: {
        expiresIn: '60m',
      },
    }),
  ],
  providers: [AuthService, JwtStrategy],
  controllers: [AuthController],
})
export class AuthModule {}
