import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import BudgetProfessionalInterface from '../interface/budget_profesional.interface';

@Entity('budget_professional')
export class BudgetProfessional implements BudgetProfessionalInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'budget_id' })
  budgetId: number;

  @Column({ name: 'professional_id' })
  professionalId: number;

  @Column({ name: 'amount' })
  amount: number;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;
}
