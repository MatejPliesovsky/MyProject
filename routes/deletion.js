var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient
var cookieParser = require('cookie-parser');
var session = require('express-session');

var config = require('../config.js');
const url = 'mongodb://localhost:27017';

router.delete('/', function(req, res) {
  var session_id = req.sessionID;
  const {
    role = "user",
  } = req.body;
  MongoClient.connect(url, (err, client) => {
    let db = client.db('drivers');
    var cursor = db.collection('users').find({role:"user"}).toArray(function(error, users) {
      let user = users[0];
    db.collection('users').deleteOne({
        role:"user"
      });
        res.json({deleted: true});
      }
    );
  });
});

module.exports = router;
