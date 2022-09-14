const express = require("express");
const router = express();
const { createVideo } = require("../controllers/videoController.js");

// router list
router.post("/", createVideo);

// export router to index.js
module.exports = router;
