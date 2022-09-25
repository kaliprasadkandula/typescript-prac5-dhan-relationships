import { DataSource } from "typeorm";
const typeOrm = require.resolve("typeorm/cli");
import 'reflect-metadata';
import {User} from './entities/userEntity'
import dotenv from 'dotenv';
const {parsed,error}=dotenv.config({path:'./dev_src/.env'})
// console.log(process.env.username,'hai')
const pe=process.env
export const AppDataSource=new DataSource({
    type:'postgres', 
    host: pe.host,
    port: 9999,
    username: 'postgres',
    password: 'kali2001', //sensitive Information  
    database: 'postgres',
    entities:['dev_src/entities/*Entity.{ts,js}'], //if i write directly address here it is not working
    migrations:['dev_src/migrations/*.ts'],
    synchronize: false,
    logging: true,
     
})
//  const appdatasource=AppDataSource.initialize() //Initializing our connection to the database 
//     .then(()=>{console.log('Connected to database')})
//     .catch((err)=>{console.log('Failed to connect to database',err)})

// // module.exports =appdatasource
// export default appdatasource 