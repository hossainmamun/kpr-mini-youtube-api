const videoModel = require("../models/videoModel.js");

// post a video
const createVideo = async (req, res) => {
  const videoObject = {
    title: req.body.title,
    description: req.body.description,
    publisher: req.body.publisher,
    download: req.body.download,
    url: req.body.url,
  };

  try {
    const video = await videoModel.create(videoObject);
    res.status(200).json(video);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// get all videos
const getAllVideos = async (req, res) => {
  try {
    const video = await videoModel.find({});
    res.status(200).json(video);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// get single videos
const getSingleVideo = async (req, res) => {
  const { id } = req.params;
  try {
    // console.log(id);
    const video = await videoModel.findById(id);
    if (!video) {
      res.status(400).json({ error: "video not found in this ID" });
    }
    res.status(200).json(video);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// update video
const updateVideo = async (req, res) => {
  const { id } = req.params;
  /* try {
    const video = await videoModel.findByIdAndUpdate(id);
    if (!video) {
      res.status(400).json({ error: "video not found in this ID" });
    }
    res.status(200).json(video);
  } catch (err) {
    res.status(400).json({ error: err.message });
  } */
};

// delete video
const deleteVideo = async (req, res) => {
  const { id } = req.params;
  try {
    const video = await videoModel.findByIdAndDelete(id);
    if (!video) {
      res.status(400).json({ error: "video not found in this ID" });
    }
    res.status(200).json(video);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// export videoController to videoRouters.js
module.exports = {
  createVideo,
  getAllVideos,
  getSingleVideo,
  updateVideo,
  deleteVideo,
};
