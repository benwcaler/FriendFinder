var friends = require("./../data/friends");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var path = require("path");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

module.exports = function (app) {
  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function (req, res) {
    for (var i = 0; i < req.body.score.length;i++) {
      req.body.score[i] = parseInt(req.body.score[i]);
    }
    var match = [];
    for (var i = 0; i < friends.length; i++) {
      var td = 0;
      for (var j = 0; j < friends[i].score.length; j++) {
        td += Math.abs(friends[i].score[j] - req.body.score[j])
      }
      if (td < match[0] || match.length === 0) {
        match = [];
        match = [td, i];
      }
    }
    
    friends.push(req.body);
    res.send(friends[match[1]]);
  });
}