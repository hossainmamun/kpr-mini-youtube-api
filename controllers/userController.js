const userModel = require("../models/userModel.js");
const jwt = require("jsonwebtoken");

// create json web token
const webToken = (id) => {
  return jwt.sign({ id }, "goTO_maRiYAnnATraCE_keyS", { expiresIn: "2d" });
};

// signUp user method
const signupUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await userModel.signup(email, password);
    const token = webToken(user._id);
    res.status(200).json({ user, token });
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
};

// login user method
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await userModel.login(email, password);
    const token = webToken(user._id);
    res.status(200).json({ email, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// export userController to userRouter.js
module.exports = {
  signupUser,
  loginUser,
};
