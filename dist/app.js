"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("reflect-metadata");
const user_router = require("./routes/user_router"); //import not working for routers
const company_router = require("./routes/company_router");
const social_router = require("./routes/social_router");
const connection_1 = require("./connection"); //This AppDataSource has to be imported here inorder to make connection
const app = (0, express_1.default)();
const port = process.env.PORT;
app.use(express_1.default.json());
app.use("/members", user_router);
app.use("/industry", company_router);
app.use("/social", social_router);
const welcome_msg = "Our company";
app.get("/welcome", (req, res) => {
    res.send(`welcome to ${welcome_msg}`);
});
app.listen(port, () => {
    console.log(`listening on port ${port}`);
});
connection_1.AppDataSource.initialize()
    .then(() => {
    console.log("connection established");
})
    .catch(() => {
    console.log("connection error");
});
