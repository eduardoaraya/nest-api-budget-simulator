import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database/db.module';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { ProfessionalModule } from './professional/professional.module';
import { BudgetsModule } from './budget/budget.module';

@Module({
  imports: [
    DatabaseModule,
    UserModule,
    AuthModule,
    ProfessionalModule,
    BudgetsModule,
  ],
})
export class AppModule {}
