var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient
var cookieParser = require('cookie-parser');
var session = require('express-session');

var config = require('../config.js');
const url = 'mongodb://localhost:27017';

router.delete('/', function(req, res) {
  var session_id = req.sessionID;
  var role = "user";
  const {
    login
  } = req.body;
  MongoClient.connect(url, (err, client) => {
    let db = client.db('drivers');
    var cursor = db.collection('users').find({login}).toArray(function(error, users) {
      let user = users[0];
      if (user) {
        res.json({error: "Užívateľské meno už neexistuje..."})
      } else if (db.collection('users').deleteOne({
        login
      }))
        res.json({deleted: true});
        console.log({user_id});
      }
    );
  });
});

module.exports = router;
