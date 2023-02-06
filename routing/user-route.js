const express = require("express");
const createUser = require("../models/user")
const router = new express.Router()




router.post("/user", async (req, res) => {
    console.log(req.body);
    const user = new createUser(req.body);
  
    try {
      await user.save();
      res.status(201);
      res.send(user);
      console.log("user created from user.js");
    } catch (e) {
      res.status(400).send(e);
      console.log(e);
    }
  });
  
  router.get("/user", async (req, res) => {
    try {
      const user = await createUser.find({});
      res.send(user);
    } catch (e) {
      res.send(e);
    }
  });
  
  router.get("/user/:ID", async (req, res) => {
    const id = req.params.ID;
  
    try {
      const user = await createUser.findById(id);
      if (!user) {
        return res.status(404).send("user not found");
      }
      res.send(user);
    } catch (e) {
      res.status(500).send("server problem");
    }
  });
  
  
  router.patch("/user/:id",async (req,res)=>{
  
    const trytoUpdate = Object.keys(req.body);
    const allowedItemForUpdate = [ "name" , "age", "email"];
   
    const isAllowedtoUpdate = trytoUpdate.every((item)=>{
     return allowedItemForUpdate.includes(item)
    })
  
    if(!isAllowedtoUpdate){
      return res.status(400).send("error: invalid property to update")
    }
  
    try {
      const user = await createUser.findByIdAndUpdate(req.params.id, req.body , {
        new : true , runValidators: true    } )
        if(!user){
          return res.status(404).send("user not found")
        }
        res.send(user)
    } catch (e) {
       res.send(e)
    }
  });
  
  
  router.delete("/user/:id",async(req,res)=>{
    try {
      const user = await createUser.findByIdAndDelete(req.params.id);
      if(!user){
        return res.status(400).send("user not found")
      }
      res.send(user)
    } catch (e) {
      res.status(500).send(e.message);
    }
  });



  module.exports = router;