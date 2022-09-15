const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

// user schema
const userSchema = new Schema({
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});

// static method
// custom signUp method
const bcrypt = require("bcrypt");
const saltRounds = 10;

userSchema.statics.signup = async function (email, password) {
  // validation userinfo
  const existingInfo = await this.findOne({ email });
  if (!email || !password) {
    throw new Error("Empty field is not allow");
  }
  if (existingInfo) {
    throw new Error("Email already used");
  }

  const salt = await bcrypt.genSalt(saltRounds);
  const hash = await bcrypt.hash(password, salt);
  const user = await this.create({ email, password: hash });
  return user;
};

// login user method
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw new Error("Empty field is not allow");
  }

  const user = await this.findOne({ email });
  if (!user) {
    throw new Error("Invalid actions");
  }

  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error("Invalid actions");
  }

  return user;
};

// export userModel modules to userController.js
module.exports = model("userCollection", userSchema);
