import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { BudgetProfessional } from '../../budget/model/budget_professional.entity';

@Entity('professional')
export class Professional {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'value' })
  value: number;

  @Column({ name: 'platform_rate' })
  platformRate: number;

  @OneToMany(
    () => BudgetProfessional,
    (budgetProfessional) => budgetProfessional.budget,
  )
  budget: BudgetProfessional[];
}
