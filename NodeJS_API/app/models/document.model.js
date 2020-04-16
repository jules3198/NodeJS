


/*

This Sequelize Model represents piece table in PostgreSQL database. 
These columns will be generated automatically: id, id_immeuble, titre, batiment.


*/

module.exports = (sequelize, Sequelize) => {
    const Document = sequelize.define("document", {
    
      date: {
        type: Sequelize.DATEONLY
        
      },
      titre: {
        type: Sequelize.STRING
      },
      w1g_file_path_ftp: {
        type: Sequelize.STRING
      },
      valid:{
        type:Sequelize.BOOLEAN
      }
      
    },
    {
      timestamps: false
    }
    );
  
    return Document;
  };