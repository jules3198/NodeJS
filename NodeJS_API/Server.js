const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
/*
var corsOptions = {
  origin: "http://localhost:8081"    
};*/


app.use(cors());

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

//call of synchronisation method

const db = require("./app/models");
db.sequelize.sync();


// In development, you may need to drop existing tables and re-sync database. Just use force: true
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});






require("./app/routes/document.routes")(app);






// set port, listen for requests
const PORT = process.env.PORT || 1000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});