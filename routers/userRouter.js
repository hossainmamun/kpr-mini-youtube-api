const express = require("express");
const { signupUser, loginUser } = require("../controllers/userController.js");
const router = express();

// signup router
router.post("/signup", signupUser);

// login router
router.post("/login", loginUser);

// export router to index.js
module.exports = router;
