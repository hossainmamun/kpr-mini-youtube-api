const express = require("express");
const router = express();
const {
  createVideo,
  getAllVideos,
  getSingleVideo,
  updateVideo,
  deleteVideo,
} = require("../controllers/videoController.js");

//! router list
// post videos
router.post("/", createVideo);

// get all videos
router.get("/", getAllVideos);

// get single video
router.get("/:id", getSingleVideo);

// update a video
router.patch("/:id", updateVideo);

// delete a video
router.delete("/:id", deleteVideo);

// export router to index.js
module.exports = router;
