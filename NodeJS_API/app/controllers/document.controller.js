const db = require("../models");
const Document = db.document;
const Op = db.Sequelize.Op;



exports.create = (req, res) => {
    // Validate request
   /* if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }*/
  
    console.log("creation objet");
    // Create a document
    const document = {
        date: req.body.date,
        titre: req.body. titre,
        w1g_file_path_ftp: req.body.w1g_file_path_ftp
    };


    console.log("objet créer :",document);
  
    // Save Document in the database
    Document.create(document)
      .then(data => {
        res.send(data);
        console.log("document créer")
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
  
    Piece.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  };



  // Find a single Document with titre

  exports.findAllBytitre = (req, res) => {
    const titre = req.query.titre;
    var condition = titre ? { titre: { [Op.iLike]: `%${titre}%` } } : null;
  
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




