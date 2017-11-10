var express = require("express"),
  app	    = express(),
  port   	= process.env.PORT || 3001,
  mongoose  = require("mongoose"),
  Task = require('./api/models/todoListModels'), //created model loading here
  User = require('./api/models/userModels')
  bodyParser = require('body-parser');

  // mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); 




app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route

var routes = require('./api/routes/userRoute'); //importing route
routes(app); //register the route


// Redirect to 404 if request url not found 
app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);


console.log('todo list RESTful API server started on: ' + port);