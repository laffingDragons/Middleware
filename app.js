
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json({ limit: '10mb',extended: true}));
app.use(bodyParser.urlencoded({limit: '10mb',extended: true}));

var middleWare = require('./myMiddleware.js');

////////start of route////////////////

////////Applicationlevel middleware////////////

app.use(function(req, res, next){
    console.log('Time of request : ', Date.now());
    console.log('Request URL is ',req.originalUrl);
    console.log('The request IP was :',req.ip);
    
    next();
});
/////////routerlevel middleware////////////
app.get('/normal/route', function (req, res) {
    var dateOfBirth = new Date(req.query.dob);
    res.send("This is a Normal route accessible to everyone and Date of birth is " + dateOfBirth);
}); // end of normal route

app.get('/restricted/route', middleWare.ageFilter, function (req, res) {
    console.log('code will be executed now');
    var dateOfBirth = new Date(req.query.dob);
    /*res.send('This is a restricted route, you must above 18 years.. '+ dateOfBirth)*/
    res.send('This is a restricted route, you must above 18 years.. But my age is ' +req.age)
});
//
app.listen(3000, function(){
    console.log('Listening on Port 3000');
});