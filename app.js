/////////routerlevel middleware////////////
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json({ limit: '10mb',extended: true}));
app.use(bodyParser.urlencoded({limit: '10mb',extended: true}));

var middleWare = require('./myMiddleware.js');

////////start of route////////////////

app.get('/normal/route', function (req, res) {
    var dateOfBirth = new Date(req.query.dob);
    res.send("This is a Normal route accessible to everyone and Date of birth is " + dateOfBirth);
}); // end of normal route

app.get('/restricted/route', middleWare.ageFilter, function (req, res) {
    var dateOfBirth = new Date(req.query.dob);
    res.send('This is a restricted route, you have to get reallly old for accessing this..')
});