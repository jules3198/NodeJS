
/*

This Sequelize Model represents piece table in PostgreSQL database. 
These columns will be generated automatically: id, id_immeuble, titre, batiment.


*/

module.exports = (sequelize, Sequelize) => {
    const Piece = sequelize.define("piece", {
      id_immeuble: {
        type: Sequelize.INTEGER
      },
      titre: {
        type: Sequelize.STRING
      },
      batiment: {
        type: Sequelize.STRING
      }
    });
  
    return Piece;
  };