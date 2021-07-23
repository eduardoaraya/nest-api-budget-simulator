import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('budget')
export class Budget {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name' })
  name: string;

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
}
