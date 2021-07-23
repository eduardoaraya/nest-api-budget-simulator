import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createBudgetProfessional1626974496804
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'budget_professional',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
          },
          {
            name: 'budget_id',
            type: 'int',
          },
          {
            name: 'professional_id',
            type: 'int',
          },
          {
            name: 'amount',
            type: 'int',
          },
        ],
      }),
      true,
    );
    await queryRunner.createForeignKey(
      'budget_professional',
      new TableForeignKey({
        columnNames: ['budget_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'budget',
      }),
    );
    await queryRunner.createForeignKey(
      'budget_professional',
      new TableForeignKey({
        columnNames: ['professional_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'professional',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('budget_professional');
  }
}
