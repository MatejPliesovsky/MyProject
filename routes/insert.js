var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient
var cookieParser = require('cookie-parser');
var session = require('express-session');

var config = require('../config.js');
const url = 'mongodb://localhost:27017';

router.post('/', function(req, res) {
  var session_id = req.sessionID;
  const {
    user_id,
    co_firstname,
    co_lastname,
    co_dob,
    co_street,
    co_city,
    co_zip,
    co_state,
    co_phone,
    co_email,
    co_team,
    co_drivinglicence,
  } = req.body;
  MongoClient.connect(url, (err, client) => {
    let db = client.db('drivers');
    var cursor = db.collection('users').find({co_drivinglicence}).toArray(function(error, users) {
      let user = users[0];
      if (user) {
        res.json({error: "Spolujazdec je už registrovaný..."})
      } else if (db.collection('users').insert({
        session_id,
        user_id,
        co_firstname,
        co_lastname,
        co_dob,
        co_street,
        co_city,
        co_zip,
        co_state,
        co_phone,
        co_email,
        co_team,
        co_drivinglicence,
      }))
        res.json({inserted: true});
      }
    );
  });
});

module.exports = router;
