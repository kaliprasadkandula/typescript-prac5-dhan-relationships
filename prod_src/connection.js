"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
require("reflect-metadata");
const AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 9999,
    username: 'postgres',
    password: 'kali2001',
    database: 'typeORM_db',
    entities: ["entities/*{.ts,.js}"],
    synchronize: true,
    logging: true,
});
AppDataSource.initialize() //Initializing our connection to the database 
    .then(() => { console.log('Connected to database'); })
    .catch((err) => { console.log('Failed to connect to database', err); });
module.exports = AppDataSource;
