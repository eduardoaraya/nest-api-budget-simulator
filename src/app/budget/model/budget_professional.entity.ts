import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import ProfessionalInterface from '../../professional/interfaces/professional.interface';
import { Professional } from '../../professional/model/professional.entity';
import BudgetProfessionalInterface from '../interfaces/budget_profesional.interface';
import BudgetInterface from '../interfaces/bugdet.interface';
import { Budget } from './budget.entity';

@Entity('budget_professional')
export class BudgetProfessional implements BudgetProfessionalInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'budget_id' })
  budgetId: number;

  @Column({ name: 'professional_id' })
  professionalId: number;

  @Column({ name: 'amount' })
  amount: number;

  @ManyToOne(() => Budget, (budget) => budget.professionals)
  budget: BudgetInterface;

  @OneToOne(() => Professional, (profesionalEnity) => profesionalEnity.budget)
  professional: ProfessionalInterface;
}
