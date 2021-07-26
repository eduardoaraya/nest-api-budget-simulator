import { MigrationInterface, QueryRunner } from 'typeorm';

export class insertProfessionals1627252517078 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    if (await queryRunner.hasTable('professional')) {
      queryRunner.query(`
            INSERT INTO professional (name, value, platform_rate) VALUES 
            ('Desenvolvedor', 100000, 0.15),
            ('Design', 100000, 0.05),
            ('Scrum Master', 90000, 0.12),
            ('PO', 150000, 0.10);
        `);
    }
  }
  public async down(queryRunner: QueryRunner): Promise<void> {}
}
