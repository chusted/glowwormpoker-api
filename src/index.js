var config = require('config');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var bunyan = require('bunyan');
var bunyanMiddleware = require('bunyan-middleware');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var cors = require('cors');

var io = require('socket.io').listen(app.listen(port));

var mongoose = require('mongoose');
mongoose.connect(config.mongo.url);

app.use(cors());

var logger = bunyan.createLogger({name: 'knockoutApi-webapi'});

app.use(
    bunyanMiddleware({
        headerName: 'X-Request-Id',
        propertyName: 'reqId',
        logName: 'req_id',
        obscureHeaders: [],
        logger: logger
    })
);

app.use(cookieParser());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var jira = require('jira')();
app.use('/api/latest/jira/', jira.router);

var messages = require('message')(app, io);
// app.use('/api/latest/message', message);

app.get('/', function(req, res) {
  res.json({'message': 'Don\'t look here...'});
});

/**
 * Error Middleware must be declared last
 */
require('error')(app);

// app.listen(port);
console.log('INFO: Listening on port %j', port);
