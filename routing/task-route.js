const express = require("express");
const createTask = require("../models/task");

const router = new express.Router();

router.post("/task", (req, res) => {
  const task = new createTask(req.body);
  try {
    task.save();
    res.status(201);
    res.send(task);
    console.log("task created from task.js");
  } catch (e) {
    res.status(400).send(e);
    console.log(e);
  }
});

router.get("/task", async (req, res) => {
  try {
    const tasks = await createTask.find({});
    res.send(tasks);
  } catch (e) {
    res.send(e);
  }
});

router.get("/task/:ID", async (req, res) => {
  const id = req.params.ID;
  const taskById = await createTask.findById(id);
  // console.log({taskById});
  try {
    if (!taskById) {
      return res.status(404).send("task not found");
    }
    res.send(taskById);
  } catch (e) {
    res.status(500).send("length of id is not valid");
  }
});

router.patch("/task/:id", async (req, res) => {
  const trytoUpdateTask = Object.keys(req.body);
  // console.log({trytoUpdateTasks});
  const allowedItemForUpdateTasks = ["task", "completed", "email"];

  const isAllowedtoUpdateTask = trytoUpdateTask.every((item) => {
    return allowedItemForUpdateTasks.includes(item);
  });

  if (!isAllowedtoUpdateTask) {
    return res.status(400).send("error: invalid property to update");
  }

  try {

    const task = await createTask.findById(req.params.id);
    trytoUpdateTask.forEach((x)=>{
      task[x]= req.body[x]
    })
    await task.save();

    // const task = await createTask.findByIdAndUpdate(req.params.id, req.body, {
    //   new: true,
    //   runValidators: true,
    // });
    if (!task) {
      return res.status(404).send("task not found");
    }
    res.send(task);
  } catch (e) {
    res.send(e);
  }
});

router.delete("/task/:id", async (req, res) => {
  try {
    const task = await createTask.findByIdAndDelete(req.params.id);
    if (!task) {
      return res.status(400).send("task not found");
    }
    res.send(task);
  } catch (e) {
    res.status(500).send(e.message);
  }
});

module.exports = router;
