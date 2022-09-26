import express from "express";
import 'reflect-metadata';

const user_router=require('./routes/user_router')

import {AppDataSource} from './connection'; //This AppDataSource has to be imported here inorder to make connection

const app = express();

const port=process.env.PORT 
app.use(express.json());
app.use('/users',user_router)
const welcome_msg:string='Our company'
app.get('/welcome',(req,res)=>{
    res.send(`welcome to ${welcome_msg}`)
})
app.listen(port,()=>{
    console.log(`listening on port ${port}`);    
}) 
AppDataSource.initialize()