// Require dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Configers app to serve static assets from 'public' folder relative to where you script it
app.use(express.static('app'));

//ROUTER
require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
  console.log("Updated  => " + Date())
});