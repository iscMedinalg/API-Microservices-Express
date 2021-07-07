var express = require('express');
var app = express();
var bodyParser = require("body-parser");
//console.log("Hello World");

/*app.get("/", (req, res) => {
    res.send("Hello Express");
});*/
/*

app.get("/", function(req, res){
  res.sendFile(__dirname + "/views/index.html");
});

app.use("/public", express.static(__dirname + "/public"));*/
//var response = "Hello json".toUpperCase(); // now becomes "HELLO WORLD"
/*app.get("/json", function(req, res) {
  if (process.env.MESSAGE_STYLE === "uppercase") {
    return res.json({message: "Hello json".toUpperCase()});
    console.log(res.json({message: "Hello json".toUpperCase()}));
  } else {
    return res.json({message: "Hello json"});
    console.log(res.json({message: "Hello json"}));
  }
});*/

/*
app.use(function midleware(req, res, next){
  var string = req.method + " " + req.path + " - " + req.ip;
  console.log(string);
  next();
});*/
/*
app.get("/now", (req, res, next) =>{
  req.time = new Date().toString();
  next();
}, (req, res) =>{
  res.send({
    time: req.time
  });
});
*/

/*app.get("/:word/echo", (req, res) => {
  const { word } = req.params;
  res.json({
    echo: word
  });
        });*/
/*
app.get("/name", (req, res) => {
  
  var firstName = req.query.first;
  var lastName = req.query.last;
  var { first: firstName, last: lastName } = req.query;
  res.json({
    name: `${firstName} ${lastName}`
  });
        });*/
/*
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
*/
app.post("/name", function(req, res) {
  // Handle the data in the request
  var string = req.body.first + " " + req.body.last;
  res.json({ name: string });
});
  



























 module.exports = app;
