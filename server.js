var express  = require('express');
var app      = express(); 					// Utilizamos express
var mongoose = require('mongoose'); 				// mongoose para mongodb
var port  	 = process.env.PORT || 8000; 			// Escucha sobre el puerto 8080
const MongoClient = require('mongodb').MongoClient;

//Conexion a BD
var mongoDB = 'mongodb://10.129.4.128:27017/TP_ABM';
mongoose.connect(mongoDB);
var conn = mongoose.connection;


app.configure(function() {
	app.use(express.static(__dirname + '/angular')); 		
	app.use(express.logger('dev')); 			// activamos el log en modo 'dev'
	app.use(express.bodyParser());
	app.use(express.methodOverride());
});

// Cargamos los endpoints
require('./app/routes.js')(app);

// Escuchamos por el puerto especificado.
app.listen(port);
console.log("APP por el puerto " + port);