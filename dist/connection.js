"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
require("reflect-metadata");
require('dotenv').config(); //you need to specify the path compulsory because you did not write .env file at  package.json
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 9999,
    username: 'postgres',
    password: 'kali2001',
    database: 'postgres',
    // entities: [__dirname + '/**/*Entity.js'],
    entities: ['dev_src/entities/*Entity.{ts,js}'],
    migrations: ['dev_src/migrations/*.ts'],
    synchronize: false,
    logging: true,
});
