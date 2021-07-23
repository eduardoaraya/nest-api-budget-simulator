import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('user')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'name' })
  name: string;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'password_hash' })
  password: string;

  @Column({ name: 'password_remember_token' })
  passwordRememberToken: string;

  @Column({ name: 'cpf' })
  cpf: string;

  @Column({ name: 'cnpj' })
  cnpj: string;

  @Column({ name: 'telephone' })
  telephone: string;

  @Column({ name: 'company_name' })
  companyName: string;

  @Column({ name: 'address_zipcode' })
  addressZipCode: string;

  @Column({ name: 'address_street' })
  addressStreet: string;

  @Column({ name: 'address_number' })
  addressNumber: number;

  @Column({ name: 'address_complement' })
  addressComplement: string;

  @Column({ name: 'address_state' })
  addressState: string;

  @Column({ name: 'address_city' })
  addressCity: string;

  @Column({ name: 'address_district' })
  addressDistrict: string;
}