import { MigrationInterface, QueryRunner } from "typeorm";

export class init1664298328262 implements MigrationInterface {
    name = 'init1664298328262'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "tweet" ("id" SERIAL NOT NULL, "text" character varying NOT NULL, CONSTRAINT "PK_6dbf0db81305f2c096871a585f6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "hashtag" ("id" SERIAL NOT NULL, "tag" character varying NOT NULL, CONSTRAINT "PK_cb36eb8af8412bfa978f1165d78" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "hashtag"`);
        await queryRunner.query(`DROP TABLE "tweet"`);
    }

}
