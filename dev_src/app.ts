import express from "express";
import "reflect-metadata";

const user_router = require("./routes/user_router"); //import not working for routers
const company_router = require("./routes/company_router");
const social_router = require("./routes/social_router");
import { AppDataSource } from "./connection"; //This AppDataSource has to be imported here inorder to make connection

const app = express();

const port = process.env.PORT;
app.use(express.json());
app.use("/members", user_router);
app.use("/industry", company_router);
app.use("/social", social_router);
const welcome_msg: string = "Our company";
app.get("/welcome", (req, res) => {
  res.send(`welcome to ${welcome_msg}`);
});
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
AppDataSource.initialize()
  .then(() => {
    console.log("connection established");
  })
  .catch(() => {
    console.log("connection error");
  });
