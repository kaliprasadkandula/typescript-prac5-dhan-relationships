import { DataSource } from "typeorm";
import 'reflect-metadata';
require('dotenv').config(); //you need to specify the path compulsory because you did not write .env file at  package.json


export const AppDataSource=new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 9999,
    username: 'postgres',
    password: 'kali2001', //sensitive Information 
    database: 'postgres',
    entities:['dev_src/entities/*Entity.{ts,js}'], //if i write directly address here it is not working
    migrations:['dev_src/migrations/*.ts'],
    synchronize: false,
    logging: true,
})


