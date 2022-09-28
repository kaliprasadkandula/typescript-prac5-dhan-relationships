"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
require("reflect-metadata");
require('dotenv').config(); //you need to specify the path compulsory because you did not write .env file at  package.json
const pe = process.env;
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: pe.pg_host,
    port: 9999,
    username: pe.pg_username,
    password: pe.pg_password,
    database: pe.pg_database,
    entities: ['dev_src/entities/*Entity.{ts,js}'],
    migrations: ['dev_src/migrations/*.ts'],
    synchronize: false,
    logging: true,
});
