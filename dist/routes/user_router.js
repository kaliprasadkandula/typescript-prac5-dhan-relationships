"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userEntity_1 = require("../entities/userEntity");
const profileEntity_1 = require("../entities/profileEntity");
const user_router = express_1.default.Router();
const { AppDataSource } = require('../connection');
// console.log(AppDataSource,'inside user router')
//get all users present in the database
user_router.get('/', async (req, res) => {
    const user_repo = await AppDataSource.getRepository(userEntity_1.User);
    const all_records = await user_repo.find();
    res.send(all_records);
});
//get particular record with id help 
user_router.get('/:id', async (req, res) => {
    console.log('hai ');
    console.log(AppDataSource, 'haiii');
    // console.log(appds)
    const user_repo = await AppDataSource.getRepository(userEntity_1.User);
    // console.log(user_repo)
    const req_record = await user_repo.findOne({ where: { id: req.params.id } }); //New typeORM
    res.send(req_record);
    // res.send('hai from get method')
});
//delete mehtod uding id in params
user_router.delete('/:id', async (req, res) => {
    const user_repo = await AppDataSource.getRepository(userEntity_1.User); //getting repository takes time
    const del_record = await user_repo.delete(req.params.id);
    if (del_record.affected)
        res.send('deleted row successfully');
    else
        res.send('not found');
});
//post method using data in the body
user_router.post('/', async (req, res) => {
    const rb = req.body;
    const user_repo = await AppDataSource.getRepository(userEntity_1.User);
    const profile_repo = await AppDataSource.getRepository(profileEntity_1.Profile);
    const profile_entity = new profileEntity_1.Profile();
    profile_entity.gender = rb.gender;
    profile_entity.age = rb.age;
    // const inserted_profile=await profile_repo.save(profile_entity)
    const user_entity = new userEntity_1.User();
    user_entity.name = rb.name;
    user_entity.Gmail = rb.Gmail;
    // user_entity.profile=inserted_profile
    user_entity.profile = profile_entity;
    await user_repo.save(user_entity);
    res.send('User saved');
});
//put method using name in params
user_router.put('/:name', async (req, res) => {
    const rb = req.body;
    const user_repo = await AppDataSource.getRepository(userEntity_1.User);
    const req_record = await user_repo.findOne({ where: { name: req.params.name } });
    req_record.name = rb.name;
    user_repo.save(req_record);
    res.send('User updated');
});
module.exports = user_router;
