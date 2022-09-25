import { MigrationInterface, QueryRunner } from "typeorm";

export class init1664107349442 implements MigrationInterface {
    name = 'init1664107349442'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "email" TO "Gmail"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "Gmail" TO "email"`);
    }

}
