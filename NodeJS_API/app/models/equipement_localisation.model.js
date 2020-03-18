


/*

This Sequelize Model represents piece table in PostgreSQL database. 
These columns will be generated automatically: id, id_immeuble, titre, batiment.


*/

module.exports = (sequelize, Sequelize) => {
    const Equipement_localisation = sequelize.define("equipement_localisation", {
      id_equipements: {
        type: Sequelize.INTEGER
      },
      position_h: {
        type: Sequelize.FLOAT
      },
      position_v: {
        type: Sequelize.FLOAT
      },
      resume: {
        type: Sequelize.STRING
      }
    });
  
    return Equipement_localisation;
  };