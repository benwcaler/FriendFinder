var friends = require("../data/friends.js");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

module.exports = function(app) {
  app.get("/api/friends", function(req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function(req, res) {
    console.log(req.body)
    friends.push(req.body);
    console.log(friends)
  });
}