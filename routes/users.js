var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient
var cookieParser = require('cookie-parser');
var session = require('express-session');

var config = require('../config.js');
const url = 'mongodb://localhost:27017';


router.get('/:id', function(req, res) {
  res.cookie({secret: "Shh, its a secret!"});
  MongoClient.connect(url, (err, client) => {
    db = client.db('drivers')
    var cursor = db.collection('Drivers').find().toArray(function(error, drivers) {
    });
  })
});

module.exports = router;
