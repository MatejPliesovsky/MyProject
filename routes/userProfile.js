var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;

var config = require('../config.js');
const url = 'mongodb://localhost:27017';

router.get('/isAuthenticated', function(req, res, next) {
  if (!req.sessionID)
    return res.end(JSON.stringify({authenticated: false}));

  let sessionID = req.sessionID;
  let session = MongoClient.connect(url, (err, client) => {
    let db = client.db('drivers');
    var cursor = db.collection('users').find({session_id: sessionID}).toArray(function(error, users) {
      let user = users[0];
      res.end(JSON.stringify({
        authenticated: user
          ? true
          : false
      }));
    });
  });
});

router.get('/loadUserData', function(req, res, next) {

  let sessionID = req.sessionID;
  MongoClient.connect(url, (err, client) => {
    let db = client.db('drivers');
    var cursor = db.collection('users').find({session_id: sessionID}).toArray(function(error, users) {
      let user = users[0];
      if (user) {
        res.json(user);
      }
      else {
        res.json({authenticated: false})
      }
      }
    );
  });
});

router.post('/update', function(req, res, next) {

});
module.exports = router;
