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
    login,
    user_id,
    firstname,
    lastname,
    dob,
    street,
    city,
    zip,
    state,
    phone,
    email,
    team,
    drivinglicence,
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
    manufacturer,
    carmodel,
    enginevalue,
    power,
    turbo,
    gear,
    evidence_number
  } = req.body;
  MongoClient.connect(url, (err, client) => {
    let db = client.db('drivers');
    var cursor = db.collection('users').find({login}).toArray(function(error, users) {
      let user = users[0];
      db.collection('competitors').insert({
        session_id,
        user_id,
        firstname,
        lastname,
        dob,
        street,
        city,
        zip,
        state,
        phone,
        email,
        team,
        drivinglicence,
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
        manufacturer,
        carmodel,
        enginevalue,
        power,
        turbo,
        gear,
        evidence_number
      })
        res.json({inserted: true});
      }
    );
  });
});

module.exports = router;
