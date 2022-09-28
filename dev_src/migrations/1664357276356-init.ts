import { MigrationInterface, QueryRunner } from "typeorm";

export class init1664357276356 implements MigrationInterface {
    name = 'init1664357276356'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tweet_hashtags_hashtag" DROP CONSTRAINT "FK_e567cf4159f79b9f48e649dc73c"`);
        await queryRunner.query(`ALTER TABLE "tweet_hashtags_hashtag" ADD CONSTRAINT "FK_e567cf4159f79b9f48e649dc73c" FOREIGN KEY ("hashtagId") REFERENCES "hashtag"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "tweet_hashtags_hashtag" DROP CONSTRAINT "FK_e567cf4159f79b9f48e649dc73c"`);
        await queryRunner.query(`ALTER TABLE "tweet_hashtags_hashtag" ADD CONSTRAINT "FK_e567cf4159f79b9f48e649dc73c" FOREIGN KEY ("hashtagId") REFERENCES "hashtag"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
