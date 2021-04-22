var express = require('express'),
	cors = require('cors');

	var app = express();
	var sensorRoutes = require('./../routes/sensors');
	var actuatorRoutes = require('./../routes/actuators');
	

	app.use(cors());
	app.use('/pi/sensors', sensorRoutes);
	app.use('/pi/actuators', sensorRoutes);


	app.get('/', function(req,res){
		res.send("Accessing the root")
	});

	app.get("/pi", function(req,res){
		res.send("Accessing the top level gateway")
	});
	

module.exports = app;
