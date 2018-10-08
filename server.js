// Require dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// app.use(express.static(path.join(__dirname, 'public')));

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Configers app to serve static assets from 'public' folder relative to where you script it
app.use(express.static('app/public'));
app.use(express.static('app/public/js'));
app.use(express.static('app/public/css'));

// Basic route that sends the user first to the AJAX Page

//ROUTER
require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);





app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
  console.log("Updated  => " + Date())
});