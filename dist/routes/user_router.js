"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userEntity_1 = require("../entities/userEntity");
const user_router = express_1.default.Router();
const path_for_connection = '../connection';
const AppDataSource = require(path_for_connection);
user_router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user_repo = yield AppDataSource.getRepository(userEntity_1.User);
    const all_records = yield user_repo.find();
    res.send(all_records);
}));
user_router.delete('/:id', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user_repo = yield AppDataSource.getRepository(userEntity_1.User);
    const all_records = yield user_repo.delete(req.params.id);
    res.send(all_records);
}));
module.exports = user_router;
