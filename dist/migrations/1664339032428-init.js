"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init1664339032428 = void 0;
class init1664339032428 {
    constructor() {
        this.name = 'init1664339032428';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "tweet_hashtags_hashtag" ("tweetId" integer NOT NULL, "hashtagId" integer NOT NULL, CONSTRAINT "PK_8fe882a39e40497b6aa7e2b1bea" PRIMARY KEY ("tweetId", "hashtagId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_9d676e307309893940ea489b8a" ON "tweet_hashtags_hashtag" ("tweetId") `);
        await queryRunner.query(`CREATE INDEX "IDX_e567cf4159f79b9f48e649dc73" ON "tweet_hashtags_hashtag" ("hashtagId") `);
        await queryRunner.query(`ALTER TABLE "tweet_hashtags_hashtag" ADD CONSTRAINT "FK_9d676e307309893940ea489b8a0" FOREIGN KEY ("tweetId") REFERENCES "tweet"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "tweet_hashtags_hashtag" ADD CONSTRAINT "FK_e567cf4159f79b9f48e649dc73c" FOREIGN KEY ("hashtagId") REFERENCES "hashtag"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "tweet_hashtags_hashtag" DROP CONSTRAINT "FK_e567cf4159f79b9f48e649dc73c"`);
        await queryRunner.query(`ALTER TABLE "tweet_hashtags_hashtag" DROP CONSTRAINT "FK_9d676e307309893940ea489b8a0"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_e567cf4159f79b9f48e649dc73"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_9d676e307309893940ea489b8a"`);
        await queryRunner.query(`DROP TABLE "tweet_hashtags_hashtag"`);
    }
}
exports.init1664339032428 = init1664339032428;
