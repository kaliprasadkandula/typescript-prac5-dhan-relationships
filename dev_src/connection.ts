import { DataSource } from "typeorm";
import 'reflect-metadata';
import {User} from './entities/user'

const AppDataSource=new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 9999,
    username: 'postgres',
    password: 'kali2001', //sensitive Information 
    database: 'typeORM_db',
    entities:[User], //if i write directly address here it is not working
    synchronize: true,
    logging: true,
})
AppDataSource.initialize() //Initializing our connection to the database 
    .then(()=>{console.log('Connected to database')})
    .catch((err)=>{console.log('Failed to connect to database',err)})

module.exports =AppDataSource