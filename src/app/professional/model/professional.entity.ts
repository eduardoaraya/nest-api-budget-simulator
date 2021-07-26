import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('professional')
export class Professional {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'value' })
  value: number;

  @Column({ name: 'platform_rate', type: 'decimal' })
  platformRate: number;
}
