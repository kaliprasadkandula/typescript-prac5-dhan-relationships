"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
// require('dotenv').config();
const user_router = require('./routes/user_router');
const path_for_connection = '../dev_src/connection';
const AppDataSource = require(path_for_connection); //This AppDataSource has to be imported here inorder to make connection
// console.log(process.env)
const app = (0, express_1.default)();
// const port:number= 3000;
const port = process.env.PORT;
app.use(express_1.default.json());
app.use('/users', user_router);
const welcome_msg = 'Our company';
app.get('/', (req, res) => {
    res.send(`welcome to ${welcome_msg}`);
});
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
