const express = require("express");
const router = express();
const {
  createVideo,
  getAllVideos,
  getSingleVideo,
  updateVideo,
  deleteVideo,
} = require("../controllers/videoController.js");
const checkAuthentication = require("../middleware/authentication.js");

//* use middleware
// * [note: if you want to apply middleware (checkAuthentication) to all router just user the line bellow. OR apply the particular router that you want]

// router.use(checkAuthentication);

//! router list
// post videos
router.post("/", checkAuthentication, createVideo);

// get all videos
router.get("/", getAllVideos);

// get single video
router.get("/:id", getSingleVideo);

// update a video
router.patch("/:id", updateVideo);

// delete a video
router.delete("/:id", checkAuthentication, deleteVideo);

// export router to index.js
module.exports = router;
