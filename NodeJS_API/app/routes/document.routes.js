module.exports = app => {
    const documents = require("../controllers/document.controller");
  
    var router = require("express").Router();
  
    // Create a new Documents
    router.post("/", documents.create);
  
    // Retrieve all Documents
    router.get("/", documents.findAll);
  
    // Retrieve all published Document
   // router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Document with id
    router.get("/:id", documents.findOne);
  
    // Update a Document with id
    router.put("/:id", documents.update);
  
   
  
    app.use('/api/documents', router);
  };