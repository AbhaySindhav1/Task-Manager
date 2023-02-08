const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const schema = mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: {
    type: String,
    unique: true,
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
  password: { type: String, required: true, minlength: 8 },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

schema.methods.ganerateToken = async function () {
  const user = this;
  // console.log( user._id.toString());
  const userToken = jwt.sign({ _id: user._id.toString() }, "this is for loginIn");

  user.tokens = user.tokens.concat({ token :userToken });
  // console.log( user.tokens );

  await user.save();

  return userToken;
};

schema.statics.findByCredentials = async (email, password) => {
  const user = await createUser.findOne({ email });
  if (!user) {
    throw new Error("unable to login");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw Error("unable to login");
  }

  return user;
};

//       for  password to hash password

schema.pre("save", async function (next) {
  const user = this;
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 8);
  }
  next();
});

const createUser = mongoose.model("user", schema);

module.exports = createUser;
