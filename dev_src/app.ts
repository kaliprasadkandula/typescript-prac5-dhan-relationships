import express from "express";
import 'reflect-metadata';
const User=require('./entities/user')
const path_for_connection= '../dev_src/connection'
const AppDataSource=require(path_for_connection)

const app = express();
const port:number= 3000;
app.use(express.json());
const welcome_msg:string='Our company'
app.get('/',(req,res)=>{
    res.send(`welcome to ${welcome_msg}`)
})
app.listen(port,()=>{
    console.log(`listening on port ${port}`);    
})