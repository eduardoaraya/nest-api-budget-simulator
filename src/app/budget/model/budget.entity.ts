import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToOne,
  OneToMany,
} from 'typeorm';
import { User } from '../../user/model/user.entity';
import BudgetProfessionalInterface from '../interfaces/budget_profesional.interface';
import BudgetInterface from '../interfaces/bugdet.interface';
import { BudgetProfessional } from './budget_professional.entity';

@Entity('budget')
export class Budget implements BudgetInterface {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name' })
  name: string;

  @OneToOne(() => User)
  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'total' })
  total: number;

  @Column({ name: 'total_per_day' })
  totalPerDay: number;

  @Column({ name: 'amount_days' })
  amountDays: number;

  @Column({ name: 'status' })
  status: string;

  @OneToMany(
    () => BudgetProfessional,
    (budgetProfessional) => budgetProfessional.professional,
  )
  professionals: BudgetProfessionalInterface[];
}
