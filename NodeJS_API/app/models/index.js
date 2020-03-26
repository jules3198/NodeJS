const dbConfig = require("../../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;




db.equipement_localisation=require("./equipement_localisation.model.js")(sequelize, Sequelize);
db.document=require("./document.model.js")(sequelize, Sequelize);
db.files = require('./file.model')(sequelize, Sequelize);

module.exports = db;
