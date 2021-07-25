import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/db.module';
import { ProfessionalRepository } from './model/professional.repository';
import { ProfessionalService } from './professional.service';
import { ProfessionalController } from './professional.controller';

@Module({
  imports: [DatabaseModule],
  exports: [ProfessionalService],
  providers: [ProfessionalRepository, ProfessionalService],
  controllers: [ProfessionalController],
})
export class ProfessionalModule {}
