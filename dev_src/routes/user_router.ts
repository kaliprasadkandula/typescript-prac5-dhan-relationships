import express from 'express';
import { User } from '../entities/userEntity';
import {Profile} from '../entities/profileEntity';
import { EntityManager } from 'typeorm';
const user_router:express.Router = express.Router();
const {AppDataSource}=require('../connection') 

// console.log(AppDataSource,'inside user router')


//get all users present in the database //with one to one relationship
user_router.get('/',async (req, res) => {
  
     const user_repo=await AppDataSource.getRepository(User)
    // const all_records=await user_repo.find({relations:{profile:true}}) //when you have lazy relation
    const all_records=await user_repo.find()                             //when you have eager relation

    res.send(all_records)

})
//get particular record with id help //with one to one relationship
user_router.get('/:id',async (req, res) => {
    
    const user_repo= await AppDataSource.getRepository(User)
    // console.log(user_repo)
    const req_record=await user_repo.findOne({where:{id:req.params.id}}) //see because we have eager relation I am not mentioning to get profile  here,it automatically mapped to user 
    res.send(req_record)
    // res.send('hai from get method')

})

//delete mehtod uding id in params //with one to one relationship
user_router.delete('/',async (req, res) => {
    const rb=req.body
    const user_repo=await AppDataSource.getRepository(User) //getting repository takes time
    const profile_repo=await AppDataSource.getRepository(Profile) 
    // const del_record= profile_repo.delete({gender:rb.gender})  //on cascade on when profile is deleted user also deleted 
   const del_record=await user_repo.delete({name:rb.name})  //when user deleted profile not getting deleted
    if(del_record)
    res.send('deleted row successfully')
    else
    res.send('not found')

})
//post method using data in the body //with one to one realtion 
user_router.post('/',async (req, res) => {
    const rb=req.body
    const user_repo=await AppDataSource.getRepository(User)
    const profile_repo=await AppDataSource.getRepository(Profile)
    const profile_entity=new Profile()
    profile_entity.gender = rb.gender
    profile_entity.age = rb.age
    // const inserted_profile=await profile_repo.save(profile_entity)
    const user_entity=new User();
    user_entity.name = rb.name;
    user_entity.Gmail = rb.Gmail;
    // user_entity.profile=inserted_profile
    user_entity.profile=profile_entity
    await user_repo.save(user_entity)
    res.send('User saved')

})

//put method using name in params //with one to one relationship
user_router.put('/:name',async (req, res) => {
    const rb=req.body
    const user_repo=await AppDataSource.getRepository(User)
    const req_record=await user_repo.findOne({where:{name:req.params.name}}) 
    req_record.Gmail  = rb.Gmail
    req_record.profile.age=rb.age
    user_repo.save(req_record)
    res.send('User updated') 
 
})
module.exports=user_router 