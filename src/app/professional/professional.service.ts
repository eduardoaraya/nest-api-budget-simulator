import { Inject, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import ProfessionalInterface from './interfaces/professional.interface';
import { Professional } from './model/professional.entity';
import { ProfessionalRepositoryName } from './model/professional.repository';

@Injectable()
export class ProfessionalService {
  constructor(
    @Inject(ProfessionalRepositoryName)
    private professionalRepository: Repository<Professional>,
  ) {}

  async findAll(): Promise<ProfessionalInterface[]> {
    return this.professionalRepository.find();
  }

  async findByIds(ids: number[]) {
    return this.professionalRepository.findByIds(ids);
  }

  async find(id: number): Promise<Professional | null> {
    return this.professionalRepository.findOne(id);
  }

  async save(professional: ProfessionalInterface): Promise<Professional> {
    return this.professionalRepository.save(professional);
  }

  async delete(professional: Professional): Promise<boolean> {
    try {
      await this.professionalRepository.delete(professional);
      return true;
    } catch (_err) {
      return false;
    }
  }
}
