"use strict";

var express = require('express');

var app = express();
console.log("Hello World");
/*app.get("/", (req, res) => {
    res.send("Hello express");
});*/

/*app.get("/", function(req, res){
    res.sendFile(__dirname + /views/index.html);
});*/

/*app.use("/public", express.static(__dirname + "/public"));*/

app.get("/json", function (req, res) {
  if (process.env.MESSAGE_STYLE === "allcaps") {
    res.json("Hello json".toUpperCase());
  } else {
    res.json("Hello json");
  }
});
module.exports = app;