// set up ======================================================================
var express = require('express');
var app = express(); 						// create our app w/ express
var port = process.env.PORT || 8080; 				// set the port
var morgan = require('morgan');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var util = require('./util');

// configuration ===============================================================

app.use(express.static('./public')); 		// set the static files location /public/img will be /img for users
app.use(morgan('dev')); // log every request to the console
app.use(bodyParser.urlencoded({'extended': 'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type: 'application/vnd.api+json'})); // parse application/vnd.api+json as json
app.use(methodOverride('X-HTTP-Method-Override')); // override with the X-HTTP-Method-Override header in the request




app.get('*', (req, res) => {
  res.sendFile(__dirname + '/public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});


app.post('/users', (req, res) => {
  var user = req.body.user;
  util.validate(user).then( data => {
    if ('city_states' in data) {
      res.send({message: 'Thank You!'});
    } else {
      res.status(500).send({message: data.reason});
    }
  });
});



// listen (start app with node server.js) ======================================
app.listen(port);
console.log("App listening on port " + port);
