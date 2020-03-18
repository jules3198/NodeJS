const db = require("../models");
const Piece = db.piece;
const Op = db.Sequelize.Op;



exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Piece
    const piece = {
        id_immeuble: req.body.id_immeuble,
        titre: req.body. titre,
        batiment: req.body.batiment
    };
  
    // Save Piece in the database
    Piece.create(piece)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Tutorial."
        });
      });
  };


  

// Retrieve all Tutorials from the database.
exports.findAll = (req, res) => {
  
};


//Retrieve all Piece

exports.findAll = (req, res) => {
   
  
    Tutorial.findAll()
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


// Find a single Piece with an id:

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


//Update a Piece identified by the id in the request:

exports.update = (req, res) => {
    const id = req.params.id;
  
    Piece.update(req.body, {
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

// Delete Piece with the specified id:
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Piece.destroy({
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

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};
