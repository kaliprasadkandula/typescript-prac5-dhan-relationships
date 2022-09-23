import express from "express";
import 'reflect-metadata';
// require('dotenv').config();
const user_router=require('./routes/user_router')
const path_for_connection= '../dev_src/connection'
const AppDataSource=require(path_for_connection) //This AppDataSource has to be imported here inorder to make connection
// console.log(process.env)
 

const app = express();
// const port:number= 3000;
const port=process.env.PORT 
app.use(express.json());
app.use('/users',user_router)
const welcome_msg:string='Our company'
app.get('/',(req,res)=>{
    res.send(`welcome to ${welcome_msg}`)
})
app.listen(port,()=>{
    console.log(`listening on port ${port}`);    
}) 