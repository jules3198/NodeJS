const db = require("../models");
const Document = db.document;
const Op = db.Sequelize.Op;





exports.create = (req, res) => {
  
  date=new Date();
  title=req.file.originalname;
  path="/uploads/"+title;
  valid=false;
  
    console.log("creation objet");
    // Create a document
    const document = {
        date: date,
        titre: title,
        w1g_file_path_ftp: path,
        valid: valid
    };
 

    console.log("objet créer :",document);
  
    // Save Document in the database
    Document.create(document)
      .then(data => {
        console.log("création document")
        res.send(data);
        console.log("document créer",data)
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
            
        });
      });
  };







//Retrieve all Document

exports.findAll = (req, res) => {
   
  
    Document.findAll()
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };


// Find a single Document with an id:

exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Document.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  };



  // Find a all valid true Documents

  exports.findAllByValidTrue = (req, res) => {
    
    const valid=true;

    var condition = valid ? { valid:true } : null;
  
    Document.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving tutorials."
        });
      });
  };


 // Find a all valid false Documents

 exports.findAllByValidFalse = (req, res) => {
    
  
  var condition =  { valid:false } ;

  Document.findAll({ where: condition })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    });
};





//Update a Document identified by the id in the request:

exports.update = (req, res) => {
    const id = req.params.id;
  
    Document.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Tutorial with id=${id}. Maybe Tutorial was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Tutorial with id=" + id
        });
      });
  };

// Delete Document with the specified id:
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Document.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Tutorial was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Tutorial with id=${id}. Maybe Tutorial was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Tutorial with id=" + id
        });
      });
  };


  exports.insertimage=(req,res)=>{

    console.log("fonction lancée");
    console.log("type:"+req.file.mimetype)
    console.log("name",req.file.originalname);
    
    console.log(req.file)
  }




