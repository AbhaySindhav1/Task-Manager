const jwt = require("jsonwebtoken");
const createUser = require("../models/user");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ","");
    const decoded = jwt.verify(token,"this is for loginIn")
    
  } catch (e) {
    res.status(400).send();
  }
  next();
};

module.exports = auth;
