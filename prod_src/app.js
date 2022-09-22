"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const User = require('./entities/user');
const path_for_connection = '../dev_src/connection';
const AppDataSource = require(path_for_connection);
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
const welcome_msg = 'Our company';
app.get('/', (req, res) => {
    res.send(`welcome to ${welcome_msg}`);
});
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
