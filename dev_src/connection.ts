import { DataSource } from "typeorm";
import 'reflect-metadata';
import {User} from './entities/user'
import dotenv from 'dotenv';
const {parsed,error}=dotenv.config({path:'./dev_src/.env'})
// console.log(process.env.username,'hai')
const pe=process.env
const AppDataSource=new DataSource({
    type:'postgres', 
    host: pe.host,
    port: 9999,
    username: 'postgres',
    password: 'kali2001', //sensitive Information  
    database: 'typeORM_db',
    entities:[User], //if i write directly address here it is not working
    synchronize: false,
    logging: true,
})
AppDataSource.initialize() //Initializing our connection to the database 
    .then(()=>{console.log('Connected to database')})
    .catch((err)=>{console.log('Failed to connect to database',err)})

module.exports =AppDataSource