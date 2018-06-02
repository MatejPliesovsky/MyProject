var express = require('express');
var router = express.Router();
const MongoClient = require('mongodb').MongoClient;

var config = require('../config.js');
const url = 'mongodb://localhost:27017';

router.post('/', function(req, res) {
  var session_id = req.sessionID;
  var login = req.body.login.trim();
  var password = req.body.password.trim();
  MongoClient.connect(url, (err, client) => {
    let db = client.db('drivers')
    var cursor = db.collection('users').find({login, password}).toArray(function(error, users) {
      let user = users[0];
      console.log(users);
      if (user) {
        db.collection('users').update({
          login: user.login,
          password: user.password
        }, {$set: {
            session_id
          }});
        console.log(`user ${user.login} logged id`);
        console.log(user);
        res.send(user);
      } else {
        req.session.authenticated = false;
        // res.json({error: "Invalid username or password"});
      }
    });
  });
  // res.send();
});

module.exports = router;
