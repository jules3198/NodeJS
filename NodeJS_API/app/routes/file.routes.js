

module.exports = app => {
    
    const fileWorker = require('../controllers/file.controller');
  
    var router = require("express").Router();
    let upload = require('../../config/multer.config.js');

    
    // insert a new image
router.post('/file/upload', upload.single("file"), fileWorker.uploadFile);
 
    // Retrieve all images
router.get('/file/listImage', fileWorker.listAllFiles);


 // Retrieve a single image with id
router.get('/file/:id', fileWorker.downloadFile);


  
    app.use('/api', router);
  };