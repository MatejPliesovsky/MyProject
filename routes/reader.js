var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;

var config = require('../config.js');
const url = 'mongodb://localhost:27017';

router.get('/', function(req, res) {
  db.users.findById(req.param._id).then(userFound => {
    if(!userFound){return res.error}
    return response.data.json(userFound);
    console.log(response);
  })
})

module.exports = router;
