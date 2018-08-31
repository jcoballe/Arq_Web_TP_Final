var Persona = require('./modelo/persona');
var Movil = require('./modelo/movil');

// Obtiene todos los objetos Persona de la base de datos
exports.getPersona = function (req, res){
	Persona.find(
		function(err, persona) {
			if (err)
				res.send(err)
					res.json(persona); // devuelve todas las Personas en JSON		
				}
			);
}

// Obtiene todos los objetos Movil de la base de datos
exports.getMovil = function (req, res){
	Movil.find(
		function(err, movil) {
			if (err)
				res.send(err)
					res.json(movil); // devuelve todos los Moviles en JSON		
				}
			);
}

// Guarda un objeto Persona en base de datos
exports.setPersona = function(req, res) {

		// Creo el objeto Persona
		Persona.create(
			{
			 num_cliente: req.body.num_cliente,
			 nombre: req.body.nombre,
			 apellido: req.body.apellido,
			 edad: req.body.edad,
			 dni: req.body.dni,
			 telefono: req.body.telefono,
			 provincia: req.body.provincia,
			 localidad: req.body.localidad,
			 calle: req.body.calle,
			 numero: req.body.numero
			 },
			function(err, persona) {
				if (err)
					res.send(err);
				// Obtine y devuelve todas las personas tras crear una de ellas
				Persona.find(function(err, persona) {
				 	if (err)
				 		res.send(err)
				 	res.json(persona);
				});
			});
	}
	
// Guarda un objeto Movil en base de datos
exports.setMovil = function(req, res) {

		// Creo el objeto Movil
		Movil.create(
			{
			 id_movil: req.body.id_movil,
			 marca: req.body.marca,
			 modelo: req.body.modelo,
			 color: req.body.color,
			 matricula: req.body.matricula
			 },
			function(err, movil) {
				if (err)
					res.send(err);
				// Obtine y devuelve todos los moviles tras crear una de ellas
				Movil.find(function(err, movil) {
				 	if (err)
				 		res.send(err)
				 	res.json(movil);
				});
			});
	}

// Modificamos un objeto Persona de la base de datos
exports.updatePersona = function(req, res){
	Persona.update( {_id : req.params.persona_id},
					{$set:{
							num_cliente: req.body.num_cliente, 
							nombre: req.body.nombre, 
							apellido: req.body.apellido, 
							edad: req.body.edad, 
							dni: req.body.dni, 
							telefono: req.body.telefono, 
							provincia: req.body.provincia, 
							localidad: req.body.localidad, 
							calle: req.body.calle, 
							numero: req.body.numero
							}}, 
					function(err, persona) {
						if (err)
							res.send(err);
				// Obtine y devuelve todas las personas tras crear una de ellas
				Persona.find(function(err, persona) {
				 	if (err)
				 		res.send(err)
				 	res.json(persona);
				});
			});
	}

// Modificamos un objeto Movil de la base de datos
exports.updateMovil = function(req, res){
	Movil.update( {_id : req.params.movil_id},
					{$set:{
							id_movil: req.body.id_movil,
							marca: req.body.marca,
							modelo: req.body.modelo,
							color: req.body.color,
							matricula: req.body.matricula
							}}, 
					function(err, movil) {
						if (err)
							res.send(err);
				// Obtine y devuelve todos los moviles tras crear una de ellas
				Movil.find(function(err, movil) {
				 	if (err)
				 		res.send(err)
				 	res.json(movil);
				});
			});
	}
	
// Elimino un objeto Persona de la base de Datos
exports.removePersona = function(req, res) {
	Persona.remove({_id : req.params.persona_id}, function(err, persona) {
		if (err)
			res.send(err);
			// Obtine y devuelve todas las personas tras borrar una de ellas
			Persona.find(function(err, persona) {
				if (err)
					res.send(err)
				res.json(persona);
			});
		});
}

// Elimino un objeto Movil de la base de Datos
exports.removeMovil = function(req, res) {
	Movil.remove({_id : req.params.movil_id}, function(err, movil) {
		if (err)
			res.send(err);
			// Obtiene y devuelve todos los Moviles tras borrar una de ellas
			Movil.find(function(err, movil) {
				if (err)
					res.send(err)
				res.json(movil);
			});
		});
}