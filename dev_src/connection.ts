import { DataSource } from "typeorm";
import 'reflect-metadata';
require('dotenv').config(); //you need to specify the path compulsory because you did not write .env file at  package.json

const pe=process.env
export const AppDataSource=new DataSource({
    type: 'postgres',
    host: pe.pg_host,
    port: 9999,   //cannot use env variable here[D]
    username: pe.pg_username,
    password: pe.pg_password, //sensitive Information 
    database: pe.pg_database,
    entities:['dev_src/entities/*Entity.{ts,js}'], //if i write directly address here it is not working
    migrations:['dev_src/migrations/*.ts'],
    synchronize: false,
    logging: true,
})


