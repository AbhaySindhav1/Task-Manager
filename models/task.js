const mongoose = require("mongoose");
const validator = require("validator");

const schema = mongoose.Schema({
  task: { type: String, required: true, trim: true },
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
completed:{type:Boolean,required:true},
age:{type:Number}
});

schema.pre("save",async function (next) {
  

  next();
})

const createTasks = mongoose.model("Task", schema);

module.exports = createTasks;
