const mongoose = require('mongoose');

const videoSchema = new mongoose.Schema({
  videoUrl: {
    type: String,
    required: true
  },
  filename:{
    type: String,
    required: true
  }
});

const Video = mongoose.model('Video', videoSchema);

module.exports = Video;
