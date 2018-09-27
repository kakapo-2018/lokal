var path = require('path')
var express = require('express')
var cors = require('cors');
var passport = require('passport');
var bodyParser = require('body-parser');


var server = express()

server.use(cors('*'));


server.use(passport.initialize())
server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))
server.use(bodyParser.json())

server.use('/api/auth', require('./routes/auth'))
server.use('/api/iwi', require('./routes/users'))
server.use('/api/iwi/story', require('./routes/story'))
server.use('/api/iwi/info', require('./routes/iwiInfo'))

server.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = server