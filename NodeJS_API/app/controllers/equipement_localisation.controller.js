const db = require("../models");
const Equipement_localisation = db.equipement_localisation;
const Op = db.Sequelize.Op;



exports.create = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a equipement_localisation
    const equipement_localisation = {
        id_equipements: req.body.id_equipements,
        position_h: req.body.position_h,
        position_v: req.body.position_v,
        resume: req.body.resume,
    };

   
  
    // Save equipement_localisation in the database
    Equipement_localisation.create(equipement_localisation)
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




//Retrieve all equipement_localisation

exports.findAll = (req, res) => {
   
  
    Equipement_localisation.findAll()
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


// Find a single equipement_localisation with an id:

exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Equipement_localisation.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  };

/*

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

*/
//Update a equipement_localisation identified by the id in the request:

exports.update = (req, res) => {
    const id = req.params.id;
  
    Equipement_localisation.update(req.body, {
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

// Delete equipement_localisation with the specified id:
exports.delete = (req, res) => {
    const id = req.params.id;
  
    Equipement_localisation.destroy({
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




