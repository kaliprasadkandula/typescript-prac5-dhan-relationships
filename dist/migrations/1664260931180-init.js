"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.init1664260931180 = void 0;
class init1664260931180 {
    constructor() {
        this.name = 'init1664260931180';
    }
    async up(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product" ADD "price" integer`);
    }
    async down(queryRunner) {
        await queryRunner.query(`ALTER TABLE "product" DROP COLUMN "price"`);
    }
}
exports.init1664260931180 = init1664260931180;
