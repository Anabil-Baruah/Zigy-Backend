// Set up Multer middleware for handling file uploads
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads')
  },
  filename: function (req, file, cb) {
    const currentDate = new Date().toISOString().replace(/:/g, '-');
    const filename = `${currentDate}-${file.originalname}`;
    cb(null, filename);
  }
});

//To filter the upload of any files other than videos
const fileFilter = function (req, file, cb) {
  const allowedFileTypes = ['video/mp4', 'video/mpeg', 'video/quicktime', 'video/x-msvideo', 'video/x-ms-wmv'];
  if (!allowedFileTypes.includes(file.mimetype)) {
    const error = new Error('Only video files are allowed');
    error.code = 'LIMIT_FILE_TYPES';
    return cb(error, false);
  }
  cb(null, true);
};

//Create a multer instance 
const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;  //export the instance so that we can use it on multiple other files
