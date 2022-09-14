const videoModel = require("../models/videoModel.js");

// post a video
const createVideo = async (req, res) => {
  const { title, description, publisher, download, url } = req.body;
  /* const videoObject = {
    title: req.body.title,
    description: req.body.description,
    publisher: req.body.publisher,
    download: req.body.download,
    url: req.body.url,
  }; */
  // console.log(videoObject);
  try {
    const video = await videoModel.create({
      title,
      description,
      publisher,
      download,
      url,
    });
    res.status(200).json(video);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// export videoController to videoRouters.js
module.exports = {
  createVideo,
};
