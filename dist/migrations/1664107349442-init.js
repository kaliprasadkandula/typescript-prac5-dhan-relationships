"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init1664107349442 = void 0;
class init1664107349442 {
    constructor() {
        this.name = 'init1664107349442';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "email" TO "Gmail"`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "user" RENAME COLUMN "Gmail" TO "email"`);
    }
}
exports.init1664107349442 = init1664107349442;
