"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
require("reflect-metadata");
const dotenv_1 = __importDefault(require("dotenv"));
const { parsed, error } = dotenv_1.default.config({ path: './dev_src/.env' });
// console.log(process.env.username,'hai')
const pe = process.env;
const AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: pe.host,
    port: 9999,
    username: 'postgres',
    password: 'kali2001',
    database: 'typeORM_db',
    entities: ['./dev_src/entities/*Entity.{ts,js}'],
    migrations: ['./dev_src/migrations/*.ts'],
    synchronize: false,
    logging: true,
});
AppDataSource.initialize() //Initializing our connection to the database 
    .then(() => { console.log('Connected to database'); })
    .catch((err) => { console.log('Failed to connect to database', err); });
// module.exports =AppDataSource
exports.default = AppDataSource;
