import express from 'express';
import { User } from '../entities/user';
const user_router:express.Router = express.Router();
const path_for_connection= '../connection'
const AppDataSource=require(path_for_connection) 

user_router.get('/',async (req, res) => {
    const user_repo=await AppDataSource.getRepository(User)
    const all_records=await user_repo.find()
    res.send(all_records)

})
user_router.delete('/:id',async (req, res) => {
    const user_repo=await AppDataSource.getRepository(User)
    const all_records=await user_repo.delete(req.params.id)
    res.send(all_records)

})
module.exports=user_router 