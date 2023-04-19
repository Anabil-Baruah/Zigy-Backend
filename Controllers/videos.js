const Video = require('../Models/video');
const baseURL = "http://localhost:3000"   //base URL of the entire project
const path = require('path')
const fs = require('fs')

//rendering the page and dispaly the videos
async function renderPage(req, res, next) {
  try {
    const videos = await Video.find({})
    res.render('video', { baseURL, videos })
    // or we can also do 
    //res.json({video})

  } catch (error) {
    next(error);
  }
}


// controller to handel video uploads
async function uploadVideo(req, res, next) {
  try {
    console.log(req.file)
    const filePath = req.file.path
    const newPath = filePath.replace('public\\', '');
    const video = new Video({ videoUrl: newPath, filename: req.file.filename });
    await video.save();
    res.status(200).redirect(`${baseURL}/videos`)
    // res.status(200).send("Video uploaded succesfully go back to previous page and refresh")
  } catch (error) {
    next(error);
  }
}


// controller to handel delete video
async function deleteVideo(req, res, next) {
  try {
    const deletedVideo = await Video.findByIdAndDelete(req.params.id);
    if (!deletedVideo) {
      return res.status(404).json({ message: 'Video not found' });
    }
    const filePath = path.join(__dirname, '../public/uploads', deletedVideo.filename);

    if (!fs.existsSync(filePath)) {
      return res.status(404).send('File not found');
    }
    fs.unlink(filePath, (err) => {
      if (err) {
        return next(err);
      }
      res.status(200).redirect(`${baseURL}/videos`)
      // or we can also do 
      //res.status(200).send('video uploaded succesfully)

    });
  } catch (error) {
    next(error);
  }
}

//controller to downoladed file
async function downloadFile(req, res, next) {
  try {
    var filename = req.params.filename;
    const filePath = path.join(__dirname, '../public/uploads', filename);

    if (!fs.existsSync(filePath)) {
      return res.status(404).send('File not found');
    }
    res.download(filePath);
  }
  catch (error) {
    next(error);
  }
}

module.exports = {
  deleteVideo,
  uploadVideo,
  renderPage,
  downloadFile
};