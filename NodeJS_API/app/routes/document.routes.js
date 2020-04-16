

const multer = require('multer');
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, './uploads');
   },
  filename: function (req, file, cb) {
      cb(null ,file.originalname);
  }
});

var upload = multer({ storage: storage })

module.exports = app => {
    const documents = require("../controllers/document.controller");
  
    var router = require("express").Router();
   
    // Create a new Documents
    router.post("/documents/upload",documents.create);
  
    // Retrieve all Documents
    router.get("/documents", documents.findAll);
      
    // Retrieve all Documents with valid true
    router.get("/documents/validTrue",documents.findAllByValidTrue)
     
    // Retrieve all Documents with valid false
    router.get("/documents/validFalse",documents.findAllByValidFalse)
  
    router.post("/documents/image",upload.single('image'),documents.create);
  
    // Retrieve a single Document with id
    router.get("/documents/:id", documents.findOne);
  
    // Update a Document with id
    router.put("/documents/:id", documents.update);
  
   
  
    app.use('/api', router);
  };