"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init1664107227516 = void 0;
class init1664107227516 {
    constructor() {
        this.name = 'init1664107227516';
    }
    async up(queryRunner) {
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" text, "email" text, CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`);
    }
    async down(queryRunner) {
        await queryRunner.query(`DROP TABLE "user"`);
    }
}
exports.init1664107227516 = init1664107227516;
