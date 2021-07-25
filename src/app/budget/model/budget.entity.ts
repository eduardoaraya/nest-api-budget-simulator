import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
} from 'typeorm';
import ProfessionalInterface from '../../professional/interfaces/professional.interface';
import { User } from '../../user/model/user.entity';
import BudgetProfessionalInterface from '../interfaces/budget_profesional.interface';
import BudgetInterface from '../interfaces/bugdet.interface';
import { BudgetProfessional } from './budget_professional.entity';

@Entity('budget')
export class Budget implements BudgetInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => User)
  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'total' })
  total: number;

  @Column({ name: 'total_per_day' })
  totalPerDay: number;

  @Column({ name: 'amount_days' })
  amountDays: number;

  @Column({ name: 'status', default: 'active' })
  status: string;
}
