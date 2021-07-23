import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('budget_professional')
export class BudgetProfessional {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'user_id' })
  userId: number;

  @Column({ name: 'professional_id' })
  professionalId: number;

  @Column({ name: 'amount' })
  amount: number;
}
