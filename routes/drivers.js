var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient
var config = require('../config.js');
const url = 'mongodb://localhost:27017';

router.get('/', function(req, res){
  console.log(req.params.id);
  MongoClient.connect(url, (err, client) => {
    db = client.db('appusers')
    var cursor = db.collection('Drivers').find().toArray(function(error, drivers){
      console.log('driver');
      console.log(drivers);
      res.json(drivers);
    });
  })
});

module.exports = router;
