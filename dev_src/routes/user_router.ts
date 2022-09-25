import express from 'express';
import { User } from '../entities/userEntity';
const user_router:express.Router = express.Router();
const path_for_connection= '../connection'
const AppDataSource=require(path_for_connection) 

user_router.get('/',async (req, res) => {
    const user_repo=await AppDataSource.getRepository(User)
    const all_records=await user_repo.find()
    res.send(all_records)

})
user_router.get('/:id',async (req, res) => {
    console.log('hai ')
    const user_repo=await AppDataSource.getRepository(User)
    const req_record=await user_repo.findOne({where:{id:req.params.id}}) //New typeORM
    res.send(req_record)

})
user_router.delete('/:id',async (req, res) => {
    const user_repo=await AppDataSource.getRepository(User) //getting repository takes time
    const del_record=await user_repo.delete(req.params.id) 
    if(del_record.affected)
    res.send('deleted row successfully')
    else
    res.send('not found')

})

// user_router.post('/',async (req, res) => {
//     const rb=req.body
//     const user_repo=await AppDataSource.getRepository(User)
//     const all_records=await user_repo.delete(req.params.id)
//     res.send(all_records)

// })
module.exports=user_router 