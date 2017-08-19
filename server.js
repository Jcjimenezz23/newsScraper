 //requiring dependencies
 var logger = require("morgan");
 var express = require("express");
 var mongoose = require("mongoose");
 var bodyParser = require("body-parser");
 var exphbs = require("express-handlebars");

 //Scraping tools
 var cheerio = require("cheerio");
 var request = require("request");

//Note and Article models
var Note = require("./models/note.js");
var Article = require("./models/Article.js");

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Initialize Express
var app = express();

// Use morgan and body parser with our app
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

// Serve static content
app.use(express.static("public"));

//setting handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/controller.js");

app.use("/", routes);

mongoose.connect("");

var db = mongoose.connection;

// display any mongoose errors
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});

// if db connection through mongoose successful, console.log a success message
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Listening on port 3000
app.listen(PORT, function() {
  console.log("App running on PORT " + PORT);
});