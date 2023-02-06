const mongoose = require("mongoose");
const validator = require("validator");

const schema = mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("enter valid email");
      }
    },
  },
  age: { type: Number },
});

const createUser = mongoose.model("user", schema);

module.exports = createUser;
