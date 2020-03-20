module.exports = app => {
    const equipement_localisation = require("../controllers/equipement_localisation.controller");
  
    var router = require("express").Router();
  
    // Create a new Documents
    router.post("/equipement_localisation", equipement_localisation.create);
  
    // Retrieve all Documents
    router.get("/equipement_localisation", equipement_localisation.findAll);
  
    // Retrieve all published Document
   // router.get("/published", tutorials.findAllPublished);
  
    // Retrieve a single Document with id
    router.get("/equipement_localisation/:id", equipement_localisation.findOne);
  
    // Update a Document with id
    router.put("/equipement_localisation/:id", equipement_localisation.update);
  
   
  
    app.use('/api', router);
  };