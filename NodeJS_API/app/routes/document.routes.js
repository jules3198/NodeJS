module.exports = app => {
    const documents = require("../controllers/document.controller");
  
    var router = require("express").Router();
  
    // Create a new Documents
    router.post("/documents", documents.create);
  
    // Retrieve all Documents
    router.get("/documents", documents.findAll);
  
    // Retrieve all published Document
   // router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Document with id
    router.get("/documents/:id", documents.findOne);
  
    // Update a Document with id
    router.put("/documents/:id", documents.update);
  
   
  
    app.use('/api', router);
  };