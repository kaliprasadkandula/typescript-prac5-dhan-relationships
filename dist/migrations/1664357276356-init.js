"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init1664357276356 = void 0;
class init1664357276356 {
    constructor() {
        this.name = 'init1664357276356';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "tweet_hashtags_hashtag" DROP CONSTRAINT "FK_e567cf4159f79b9f48e649dc73c"`);
        await queryRunner.query(`ALTER TABLE "tweet_hashtags_hashtag" ADD CONSTRAINT "FK_e567cf4159f79b9f48e649dc73c" FOREIGN KEY ("hashtagId") REFERENCES "hashtag"("id") ON DELETE CASCADE ON UPDATE NO ACTION`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "tweet_hashtags_hashtag" DROP CONSTRAINT "FK_e567cf4159f79b9f48e649dc73c"`);
        await queryRunner.query(`ALTER TABLE "tweet_hashtags_hashtag" ADD CONSTRAINT "FK_e567cf4159f79b9f48e649dc73c" FOREIGN KEY ("hashtagId") REFERENCES "hashtag"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }
}
exports.init1664357276356 = init1664357276356;
