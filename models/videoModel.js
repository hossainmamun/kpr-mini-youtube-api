const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const model = mongoose.model;

// build video model
const videoSchema = new Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    publisher: {
      type: String,
      require: true,
    },
    download: {
      type: Boolean,
      require: true,
    },
    url: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

// export videoModel to videoController
module.exports = model("videoCollection", videoSchema);
