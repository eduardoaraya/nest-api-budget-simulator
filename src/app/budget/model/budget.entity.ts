import { Entity, PrimaryGeneratedColumn, Column, OneToOne } from 'typeorm';
import { User } from '../../user/model/user.entity';
import BudgetInterface from '../interface/bugdet.interface';

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
