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
var Note = require("./models/Note.js");
var Article = require("./models/Article.js");

// Set mongoose to leverage built in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Use morgan and body parser with our app
app.use(logger("dev"));
app.use(bodyParser.urlencoded({
  extended: false
}));

//initialize express
var app = express();
 