const videoModel = require("../models/videoModel.js");

// post a video
const createVideo = async (req, res) => {
  const { title, description, publisher, download, url } = req.body;
  let emptyField = [];

  // check empty field
  if (!title) {
    emptyField.push("title");
  }
  if (!description) {
    emptyField.push("description");
  }
  if (!publisher) {
    emptyField.push("publisher");
  }
  if (!download) {
    emptyField.push("download");
  }
  if (!url) {
    emptyField.push("url");
  }
  if (emptyField.length > 0) {
    return res
      .status(400)
      .json({ error: "please fill all the fields", emptyField });
  }

  try {
    const user_id = req.user._id;
    console.log(user_id);
    const video = await videoModel.create({
      title,
      description,
      publisher,
      download,
      url,
      user_id,
    });
    res.status(200).json(video);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// get all videos
// const getAllVideos = async (req, res) => {
//   try {
//     const video = await videoModel.find({});
//     res.status(200).json(video);
//   } catch (err) {
//     res.status(400).json({ error: err.message });
//   }
// };

// get user post videos
const getUserPostVideo = async (req, res) => {
  try {
    const user_id = req.user._id;
    console.log(req.user);
    const video = await videoModel.find({ user_id });
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
  try {
    const video = await videoModel.findById(id);
    if (!video) {
      res.status(400).json({ error: "video not found in this ID" });
    } else {
      Object.assign(video, req.body);
      video.save();
      res.status(200).json(video);
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// delete video
const deleteVideo = async (req, res) => {
  const { id } = req.params;
  try {
    const video = await videoModel.findByIdAndDelete(id);
    if (!video) {
      res.status(400).json({ error: "video not found in this ID" });
    } else {
      res.status(200).json(video);
    }
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// export videoController to videoRouters.js
module.exports = {
  createVideo,
  // getAllVideos,
  getUserPostVideo,
  getSingleVideo,
  updateVideo,
  deleteVideo,
};
