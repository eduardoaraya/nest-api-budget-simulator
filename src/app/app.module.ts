import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from '../database/db.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ProfessionalModule } from './professional/professional.module';
import { BudgetsModule } from './budget/budget.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    DatabaseModule,
    UserModule,
    AuthModule,
    ProfessionalModule,
    BudgetsModule,
    AuthModule,
  ],
})
export class AppModule {}
