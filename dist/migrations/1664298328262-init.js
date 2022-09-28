"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init1664298328262 = void 0;
class init1664298328262 {
    constructor() {
        this.name = 'init1664298328262';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "tweet" ("id" SERIAL NOT NULL, "text" character varying NOT NULL, CONSTRAINT "PK_6dbf0db81305f2c096871a585f6" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "hashtag" ("id" SERIAL NOT NULL, "tag" character varying NOT NULL, CONSTRAINT "PK_cb36eb8af8412bfa978f1165d78" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "hashtag"`);
        await queryRunner.query(`DROP TABLE "tweet"`);
    }
}
exports.init1664298328262 = init1664298328262;
