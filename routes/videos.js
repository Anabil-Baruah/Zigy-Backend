const router = require('express').Router()
const multer = require('multer')
const videosController = require('../Controllers/videos');
const upload = require('../multer');

router.route('/')
    .get(videosController.renderPage)
    .post(upload.single('video'), videosController.uploadVideo)

router.route('/:id')
    .delete(videosController.deleteVideo);

router.route('/download/:filename')
    .get(videosController.downloadFile)

router.route('/delete/:id')
    .get(videosController.deleteVideo)
    
module.exports = router
