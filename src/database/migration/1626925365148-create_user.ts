import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createUser1626925365148 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'user',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'password_hash',
            type: 'varchar',
          },
          {
            name: 'password_remember_token',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'cpf',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'cnpj',
            type: 'varchar',
          },
          {
            name: 'telephone',
            type: 'varchar',
          },
          {
            name: 'company_name',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'address_zipcode',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'address_street',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'address_number',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'address_complement',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'address_state',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'address_city',
            type: 'varchar',
            isNullable: true,
          },
          {
            name: 'address_district',
            type: 'varchar',
            isNullable: true,
          },
        ],
      }),
      true,
    );
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('user');
  }
}
