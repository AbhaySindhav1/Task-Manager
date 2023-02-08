const mongoose = require("mongoose");
const express = require("express");
require("./db/database");
const userRouter =  require("./routing/user-route");
const taskRouter =  require("./routing/task-route");
const createUser = require("./models/user");
const createTask = require("./models/task");

const app = express();


app.use(express.json());

app.use(userRouter);
app.use(taskRouter);

app.listen(3501, () => {
  console.log("listing port no : " + 3501);
});

