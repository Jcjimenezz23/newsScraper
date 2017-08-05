 //requiring dependencies
 var cheerio = require("cheerio");
 var request = require("request");
 var express = require("express");
 var mongoose = require("mongoose");
 var bodyParser = require("body-parser");
 var exphbs = require("express-handlebars");

//express app
var app = express();
var PORT = process.env.PORT || 8080;
