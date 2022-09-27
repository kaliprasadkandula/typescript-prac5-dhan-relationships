import { MigrationInterface, QueryRunner } from "typeorm";

export class init1664260931180 implements MigrationInterface {
    name = 'init1664260931180'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" ADD "price" integer`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "price"`);
    }

}
