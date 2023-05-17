const multer = require('multer');
const path = require('path');

// Setting storage engine for multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Specify the directory where you want to store the images
    cb(null, path.join(__dirname,'../public/img'));
  },
  filename: function (req, file, cb) {
    // Generate a unique filename for the uploaded image
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    const extension = path.extname(file.originalname);
    cb(null, 'image-' + uniqueSuffix + extension);
  }
});

// Initializing multer with the storage engine
const upload = multer({ storage });

module.exports = upload;
