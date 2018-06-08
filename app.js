var express = require('express');
var http = require('http');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var session = require('express-session');
require("babel-core/register");
require("babel-polyfill");

var bodyParser = require('body-parser')

var login = require('./routes/login');
var logout = require('./routes/logout');
var register = require('./routes/register');
var update = require('./routes/update');
var deletion = require('./routes/deletion');
var insert = require('./routes/insert');
var insertcar = require('./routes/insertcar');
var users = require('./routes/users');
var userProfile = require('./routes/userProfile');
var competitors = require('./routes/competitors');
var signuponevent = require('./routes/signuponevent');
var drivers = require('./routes/drivers');

app.use(express.static(__dirname + '/src'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true,
  cookie: {
    path: '/',
    httpOnly: false,
    secure: false,
    maxAge: null
  }
}));

app.all("*", function(req, res, next) {
  next();

});
app.use('/users', users);
app.use('/login', login);
app.use('/register',register);
app.use('/update',update);
app.use('/deletion',deletion);
app.use('/insert',insert);
app.use('/insertcar',insertcar);
app.use('/logout', logout);
app.use('/signuponevent', signuponevent);
app.use('/competitors', competitors);
app.use('/drivers', drivers);
app.use('/userProfile', userProfile);
app.use('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'src', 'index.html'));
});

http.createServer(app).listen(3000);

module.exports = app;
